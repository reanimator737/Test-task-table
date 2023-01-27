import { PayloadAction } from '@reduxjs/toolkit'
import { DTO } from 'src/interface'
import { call, put, takeLatest } from 'redux-saga/effects'
import { API } from 'src/api'
import { changeById, tryToChangeById } from 'src/store/reducer'

export function* handlerUpdateData({ payload }: PayloadAction<DTO>) {
  try {
    const { data } = yield call(API.updateById, payload)
    yield put(changeById(data))
  } catch (error) {
    console.log(error)
  }
}

export function* watcherTryToChangeById() {
  yield takeLatest(tryToChangeById.type, handlerUpdateData)
}
