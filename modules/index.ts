import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import stopwatch, { 
  initialState as initialStateStopwatch,
} from './stopwatch/reducers'

import { 
  saga as sagaStopwatch,
} from './stopwatch/sagas'

export const exampleInitialState = {
  stopwatch: initialStateStopwatch,
}

export function* rootSaga() {
  yield all([
      fork(sagaStopwatch),
  ])
}

export default combineReducers({
  stopwatch,
})
