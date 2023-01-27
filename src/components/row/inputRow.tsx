import React, { useCallback, useMemo, useState } from 'react'
import { FiveRowEl } from 'src/components/row/style'
import { DTO } from 'src/interface'
import { useDispatch } from 'react-redux'
import { tryToCreateNewRow } from 'src/store/reducer'
import { Cell } from 'src/components/cell/style'
import { DefaultButton } from 'src/components/button/style'

export const InputRow: React.FC = () => {
  const initialState = useMemo(
    () => ({
      name: '',
      age: 0,
      aboutPerson: '',
    }),
    [],
  )
  const dispatch = useDispatch()
  const [state, setState] = useState<Omit<DTO, 'id'>>(initialState)

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const createNewRowAction = useCallback(() => {
    if (state.name.trim() === '' || state.aboutPerson.trim() === '') {
      alert('Please fill in data')
      return
    }
    dispatch(tryToCreateNewRow(state))
    setState(initialState)
  }, [dispatch, tryToCreateNewRow, state])

  return (
    <FiveRowEl>
      <Cell disabled />
      <Cell value={state.name} placeholder={'Enter your name'} name="name" onChange={handleOnChange} />
      <Cell value={state.age} placeholder={'Enter your age'} type="number" name="age" onChange={handleOnChange} />
      <Cell
        value={state.aboutPerson}
        placeholder={'Tell about yourself'}
        name="aboutPerson"
        onChange={handleOnChange}
      />
      <DefaultButton onClick={createNewRowAction}>Create new</DefaultButton>
    </FiveRowEl>
  )
}
