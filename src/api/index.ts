import axios from 'axios'
import { DTO } from 'src/interface'

const endpoint = 'https://63d1c7414abff88834ff5395.mockapi.io/test2'

const deleteById = (id: string) => {
  return axios.delete(`${endpoint}/${id}`)
}

const getAllData = async () => {
  return axios.get(endpoint)
}

const createNew = async ({ age, name, aboutPerson }: Omit<DTO, 'id'>) => {
  return axios(endpoint, {
    method: 'POST',
    data: {
      age,
      name,
      aboutPerson,
    },
  })
}

const updateById = async ({ id, age, name, aboutPerson }: DTO) => {
  return axios(`${endpoint}/${id}`, {
    method: 'PUT',
    data: {
      age,
      name,
      aboutPerson,
    },
  })
}

export const API = {
  deleteById,
  getAllData,
  updateById,
  createNew,
}
