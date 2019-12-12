/* global fetch */

import { all, put, takeLatest, delay } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess } from '../actions'

es6promise.polyfill()

function* loadDataSaga() {
  try {
    console.log('test 1')
    yield delay(1000)
    console.log('test 2')
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  ])
}

export default rootSaga
