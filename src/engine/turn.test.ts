import turn from './turn';
import { Facing, Direction } from '../types';

describe('turn', () => {
    it('should turn right correctly', () => {
        const expected = Facing.SOUTH;
        expect(turn(Facing.EAST, Direction.RIGHT)).toEqual(expected);
    });

    it('should turn left correctly', () => {
        const expected = Facing.SOUTH;
        expect(turn(Facing.WEST, Direction.LEFT)).toEqual(expected);
    });
});