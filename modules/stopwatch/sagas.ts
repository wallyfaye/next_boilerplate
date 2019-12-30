import { all, call, put, takeLatest } from 'redux-saga/effects'
import worldTime from '../../utils/worldTime'
import { 
    START,
    START_SUCCESS,
    STOP,
    STOP_SUCCESS,
    ERROR 
} from './actionTypes'

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
