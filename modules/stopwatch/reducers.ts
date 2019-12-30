import { 
    START_SUCCESS,
    STOP_SUCCESS,
    ERROR 
} from './actionTypes'

export const initialState = {
    isRunning: false,
    startTime: null,
    stopTime: null,
    startTimeWorldTime: null,
    stopTimeWorldTime: null,
    errors: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_SUCCESS:
        return {
            ...state,
            isRunning: true,
            startTime: action.startTime,
            startTimeWorldTime: action.startTimeWorldTime,
            stopTime: initialState.stopTime,
            stopTimeWorldTime: initialState.stopTimeWorldTime,
        }
        
        case STOP_SUCCESS:
        return {
            ...state,
            isRunning: false,
            stopTime: action.stopTime,
            stopTimeWorldTime: action.stopTimeWorldTime,
        }
        
        case ERROR:
        return {
            ...initialState,
            errors: state.errors.push(action.error)
        }
        
        default:
        return state
    }
}
