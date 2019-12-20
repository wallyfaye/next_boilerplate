import { all, call, put, takeLatest } from 'redux-saga/effects'
import worldTime from '../utils/worldTime'

export const initialState = {
    isRunning: false,
    startTime: null,
    stopTime: null,
    startTimeWorldTime: null,
    stopTimeWorldTime: null,
    errors: []
}

const START = 'stopwatch/START'
const START_SUCCESS = 'stopwatch/START_SUCCESS'
const STOP = 'stopwatch/STOP'
const STOP_SUCCESS = 'stopwatch/STOP_SUCCESS'
const ERROR = 'stopwatch/ERROR'

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

export function startStopwatch() {
    return { type: START }
}

export function stopStopwatch() {
    return { type: STOP }
}

function* start() {
    try {
        const startTime = Date.now()
        const startTimeWorldTime = yield call(worldTime.getCurrentTime)

        yield put({ 
            type: START_SUCCESS,
            startTime,
            startTimeWorldTime,
        })
    } catch (error) {
        yield put({ type: ERROR, error })
    }
}

function* stop() {
    try {
        const stopTime = Date.now()
        const stopTimeWorldTime = yield call(worldTime.getCurrentTime)

        yield put({ 
            type: STOP_SUCCESS,
            stopTime,
            stopTimeWorldTime,
        })
    } catch (error) {
        yield put({ type: ERROR, error })
    }
}

export function* saga() {
    yield all([
        takeLatest(START, start),
        takeLatest(STOP, stop),
    ])
}
