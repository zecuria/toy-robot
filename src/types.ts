export interface Coordinate {
    x: number,
    y: number
}

export interface Position extends Coordinate {
    f: Facing
}

export enum Facing {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST'
}

export enum Direction {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

export enum CommandType {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    PLACE = 'PLACE',
    MOVE = 'MOVE',
    REPORT = 'REPORT'
}

export interface Command {
    type: CommandType,
    position?: Position
}