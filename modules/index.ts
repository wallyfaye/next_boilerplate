import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import stopwatch, { 
  saga as sagaStopwatch,
  initialState as initialStateStopwatch,
} from './stopwatch'

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
