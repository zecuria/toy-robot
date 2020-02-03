import { Position } from "../types";
import { BOARD_DIMENTIONS } from "../constants";

export default function validatePosition({x, y}: Position): boolean {
    const { maxX, maxY, minX, minY } = BOARD_DIMENTIONS;

    if (x > maxX || y > maxY || x < minX || y < minY) {
        return false;
    }
    return true;
}