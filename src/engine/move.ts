import { Facing, Position } from "../types";
import validatePosition from "./validatePosition";

function updatePosition(position: Position): Position {
    const newPosition = {...position};
    const { f } = position;
    if (f === Facing.NORTH) {
        newPosition.y += 1;
    } else if (f === Facing.SOUTH) {
        newPosition.y -= 1;
    } else if (f === Facing.EAST) {
        newPosition.x += 1;
    } else if (f === Facing.WEST) {
        newPosition.x -= 1;
    }

    return newPosition
}

function move(position: Position): Position {
    const updatedPosition = updatePosition(position);
    const isPositionValid = validatePosition(updatedPosition);
    
    if (!isPositionValid) {
        return position;
    }

    return updatedPosition;
}

export default move;
