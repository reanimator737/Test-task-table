import { call, put, takeLatest } from 'redux-saga/effects'
import { createNewRow, tryToCreateNewRow } from 'src/store/reducer'
import { PayloadAction } from '@reduxjs/toolkit'
import { DTO } from 'src/interface'
import { API } from 'src/api'

export function* handlerCreateNewRow({ payload }: PayloadAction<Omit<DTO, 'id'>>) {
  try {
    const { data } = yield call(API.createNew, payload)
    yield put(createNewRow(data))
  } catch (error) {
    console.log(error)
  }
}

export function* watcherTryToCreateNewRow() {
  yield takeLatest(tryToCreateNewRow.type, handlerCreateNewRow)
}
