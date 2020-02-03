import { Facing, Direction } from "../types";

function turn(f: Facing, direction: Direction): Facing {
    const directionToFacingMap = {
        [Direction.LEFT]: {
            [Facing.NORTH]: Facing.WEST,
            [Facing.WEST]: Facing.SOUTH,
            [Facing.SOUTH]: Facing.EAST,
            [Facing.EAST]: Facing.NORTH,
        }, 
        [Direction.RIGHT]: {
            [Facing.NORTH]: Facing.EAST,
            [Facing.EAST]: Facing.SOUTH,
            [Facing.SOUTH]: Facing.WEST,
            [Facing.WEST]: Facing.NORTH,
        }
    }

    return directionToFacingMap[direction][f];
}

export default turn;
