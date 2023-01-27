import { spawn } from 'redux-saga/effects'
import { watcherGetData } from 'src/store/sagas/getData'
import { watcherTryToChangeById } from 'src/store/sagas/updateData'
import { watcherTryToDeleteById } from 'src/store/sagas/deleteById'
import { watcherTryToCreateNewRow } from 'src/store/sagas/createNew'

export default function* rootSaga() {
  yield spawn(watcherGetData)
  yield spawn(watcherTryToChangeById)
  yield spawn(watcherTryToDeleteById)
  yield spawn(watcherTryToCreateNewRow)
}
