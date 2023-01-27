import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DTO } from 'src/interface'

export const LOCAL_STORAGE_DATA = 'data'
const localStorageValue = localStorage.getItem(LOCAL_STORAGE_DATA)
const initialState: DTO[] = localStorageValue ? JSON.parse(localStorageValue) : []

export const dataSlice = createSlice({
  name: 'dataTransfer',
  initialState,
  reducers: {
    getData() {},
    setData(_, { payload }: PayloadAction<DTO[]>) {
      localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(payload))
      return payload
    },

    tryToChangeById(_, { payload }: PayloadAction<DTO>) {},
    changeById(state, { payload }: PayloadAction<DTO>) {
      const answer = state.map((el) => {
        if (el.id === payload.id) {
          return payload
        }
        return el
      })
      localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(answer))

      return answer
    },

    tryToDeleteById(_, { payload }: PayloadAction<string>) {},
    deleteById(state, { payload }: PayloadAction<string>) {
      const answer = state.filter((el) => el.id !== payload)
      localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(answer))
      return answer
    },

    tryToCreateNewRow(_, { payload }: PayloadAction<Omit<DTO, 'id'>>) {},
    createNewRow(state, { payload }: PayloadAction<DTO>) {
      const answer = [...state, payload]
      localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(answer))
      return answer
    },
  },
})

export const {
  getData,
  setData,
  tryToDeleteById,
  deleteById,
  tryToChangeById,
  changeById,
  tryToCreateNewRow,
  createNewRow,
} = dataSlice.actions
