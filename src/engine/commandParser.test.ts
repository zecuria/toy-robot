import commandParser from './commandParser';
import { CommandType } from '../types';
import { BOARD_DIMENTIONS } from '../constants';

describe('commandParser', () => {
    describe('left command', () => {
        it('should parse the left command correctly', () => {
            const expected = { type: CommandType.LEFT };
            expect(commandParser('LEFT')).toEqual(expected);
        });
    });

    describe('right command', () => {
        it('should parse the right command correctly', () => {
            const expected = { type: CommandType.RIGHT };
            expect(commandParser('RIGHT')).toEqual(expected);
        });
    });

    describe('move command', () => {
        it('should parse the move command correctly', () => {
            const expected = { type: CommandType.MOVE };
            expect(commandParser('MOVE')).toEqual(expected);
        });
    });

    describe('report command', () => {
        it('should parse the report command correctly', () => {
            const expected = { type: CommandType.REPORT };
            expect(commandParser('REPORT')).toEqual(expected);
        });
    });

    describe('place command', () => {
        it('should parse a valid place correctly', () => {
            const expected = { type: CommandType.PLACE, position: { x: 0, y: 0, f: 'NORTH'} };
            expect(commandParser('PLACE 0,0,NORTH')).toEqual(expected);
        });

        it('should not parse decimal positions', () => {
            expect(commandParser('PLACE 0.0,0,NORTH')).toBeUndefined;
        });

        it('should not parse out of bound points', () => {
            const outOfBoundX = BOARD_DIMENTIONS.maxX + 1;
            expect(commandParser(`PLACE ${outOfBoundX},0,NORTH`)).toBeUndefined;
        });
    });
});