import { Command, CommandType, Facing } from "../types";
import validatePosition from "./validatePosition";

interface Parser {
    (str: string): Command | undefined;
}

const placeCommandParser: Parser = str => {
    const pattern = new RegExp(`${CommandType.PLACE} (-?\\d+),(-?\\d+),(.+)`);
    const result = pattern.exec(str);
    if (!result) {
        return;
    }
    const [, rawX, rawY, f] = result;

    const isValidFacingValue = Object.values(Facing).includes(f as Facing);
    if (!isValidFacingValue) {
        return;
    }

    const x = Number(rawX);
    const y = Number(rawY);

    const position = {
        x,
        y,
        f: f as Facing,
    }

    if (!validatePosition(position) ){
        return;
    }

    return {
        type: CommandType.PLACE,
        position: {
            x,
            y,
            f: f as Facing,
        }
    }
}

const leftCommandParser: Parser = str => (
    str === CommandType.LEFT ? { type: CommandType.LEFT } : undefined
); 
const rightCommandParser: Parser = str => (
    str === CommandType.RIGHT ? { type: CommandType.RIGHT } : undefined
); 
const reportCommandParser: Parser = str => (
    str === CommandType.REPORT ? { type: CommandType.REPORT } : undefined
); 
const moveCommandParser: Parser = str => (
    str === CommandType.MOVE ? { type: CommandType.MOVE } : undefined
); 

const CommandToParserMap: Record<CommandType, Parser> = {
    [CommandType.LEFT]: leftCommandParser,
    [CommandType.RIGHT]: rightCommandParser,
    [CommandType.REPORT]: reportCommandParser,
    [CommandType.MOVE]: moveCommandParser,
    [CommandType.PLACE]: placeCommandParser
};

const parseCommand: Parser = (input) => {
    const commandTypes: CommandType[] = Object.values(CommandType);

    for(let type of commandTypes) {
        let parser = CommandToParserMap[type];
        const command = parser(input);
        if(command) {
            return command;
        }
    }

    return;
}
export default parseCommand;