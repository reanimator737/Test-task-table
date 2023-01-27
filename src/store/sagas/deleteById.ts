import { call, put, takeLatest } from 'redux-saga/effects'
import { deleteById, tryToDeleteById } from 'src/store/reducer'
import { PayloadAction } from '@reduxjs/toolkit'
import { API } from 'src/api'

export function* handlerDeleteData({ payload }: PayloadAction<string>) {
  try {
    yield call(API.deleteById, payload)
    yield put(deleteById(payload))
  } catch (error) {
    console.log(error)
  }
}

export function* watcherTryToDeleteById() {
  yield takeLatest(tryToDeleteById.type, handlerDeleteData)
}
