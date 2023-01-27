import { call, put, takeLatest } from 'redux-saga/effects'
import { API } from 'src/api'
import { getData, setData } from 'src/store/reducer'

export function* handlerGetData() {
  try {
    const { data } = yield call(API.getAllData)
    yield put(setData(data))
  } catch (error) {
    console.log(error)
  }
}

export function* watcherGetData() {
  yield takeLatest(getData.type, handlerGetData)
}
