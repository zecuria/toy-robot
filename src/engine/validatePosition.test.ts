import validatePosition from './validatePosition';
import { Facing } from '../types';
import { BOARD_DIMENTIONS } from '../constants';

describe('validate position', () => {
    it('should return true for a valid position', () => {
        expect(validatePosition({ x: 0, y: 0, f: Facing.EAST })).toBe(true);
    });
    it('should return false for an out of bound position', () => {
        expect(validatePosition({ x: BOARD_DIMENTIONS.maxX + 1, y: 0, f: Facing.EAST })).toBe(false);
    })
});