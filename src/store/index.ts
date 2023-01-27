import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { dataSlice } from 'src/store/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'src/store/sagas/root'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
  middleware,
})

sagaMiddleware.run(rootSaga)
