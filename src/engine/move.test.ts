import move from './move';
import { Facing } from '../types';
import { BOARD_DIMENTIONS } from '../constants';

describe('move', () => {
    it('should move up when facing north', () => {
        const starting = { x: 0, y: 0, f: Facing.NORTH };
        const expected = { x: 0, y: 1, f: Facing.NORTH };

        expect(move(starting)).toEqual(expected);
    });

    it('should move down when facing south', () => {
        const starting = { x: 0, y: 1, f: Facing.SOUTH };
        const expected = { x: 0, y: 0, f: Facing.SOUTH };

        expect(move(starting)).toEqual(expected);
    });

    it('should move right when facing East', () => {
        const starting = { x: 0, y: 0, f: Facing.EAST };
        const expected = { x: 1, y: 0, f: Facing.EAST };

        expect(move(starting)).toEqual(expected);
    });

    it('should move left when facing East', () => {
        const starting = { x: 1, y: 0, f: Facing.WEST };
        const expected = { x: 0, y: 0, f: Facing.WEST };

        expect(move(starting)).toEqual(expected);
    });

    it('should not move past the boundry', () => {
        const starting = { x: 0, y: BOARD_DIMENTIONS.maxY, f: Facing.NORTH };
        const expected = { x: 0, y: BOARD_DIMENTIONS.maxY, f: Facing.NORTH };

        expect(move(starting)).toEqual(expected);
    });
});