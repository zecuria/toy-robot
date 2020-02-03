import { Position, CommandType, Direction } from "./types";
import turn from "./engine/turn";
import move from "./engine/move";

interface State {
    currentPosition?: Position,
    currentlyReporting?: Position
}

interface Action {
    type?: CommandType,
    payload?: Position
}

const initialState: State = {
    currentPosition: undefined,
    currentlyReporting: undefined,
};

const reducer = (state = initialState, action: Action): State => {
    const { currentPosition } = state;
    if (!currentPosition) {
        if (action.type !== CommandType.PLACE || !action.payload) {
            return state;
        }
        return { ...state, currentPosition: { ...action.payload }};
    }

    const { f } = currentPosition;

    if (action.type === CommandType.PLACE) {
        return action.payload ? { ...state, currentPosition: { ...action.payload }} : state;
    }

    if(action.type === CommandType.LEFT) {
        return {
            ...state,
            currentPosition: { ...currentPosition, f: turn(f, Direction.LEFT) }
        }
    }

    if (action.type === CommandType.RIGHT) {
        return {
            ...state,
            currentPosition: {...currentPosition,  f: turn(f, Direction.RIGHT) }
        }
    }

    if (action.type === CommandType.MOVE) {
        return {
            ...state,
            currentPosition: move(currentPosition)
        }
    }

    if (action.type === CommandType.REPORT) {
        return {
            ...state,
            currentlyReporting: { ...currentPosition }
        }
    }
    return state
}

export default reducer;