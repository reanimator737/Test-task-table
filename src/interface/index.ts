import { store } from 'src/store'

export interface DTO {
  id: string
  name: string
  age: number
  aboutPerson: string
}

export type CellInterface = { name?: 'id' | 'name' | 'age' | 'aboutPerson' }

export type RootState = ReturnType<typeof store.getState>
