import React, { useCallback, useEffect, useState } from 'react'
import { Row, FirstRow, SixRowEl } from './style'
import { DTO } from 'src/interface'
import { useDispatch } from 'react-redux'
import { tryToChangeById, tryToDeleteById } from 'src/store/reducer'
import { Cell } from 'src/components/cell/style'
import { DefaultButton } from 'src/components/button/style'

const ChangedRow: React.FC<DTO> = (info) => {
  const [state, setState] = useState<DTO>(info)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const dispatch = useDispatch()

  const changeDisabledStatus = useCallback(() => setIsDisabled((prevState) => !prevState), [])

  const sendChanges = useCallback(() => {
    dispatch(tryToChangeById(state))
  }, [dispatch, state, tryToChangeById])

  const deleteRowAction = useCallback(() => {
    dispatch(tryToDeleteById(info.id))
  }, [dispatch, tryToDeleteById])

  useEffect(() => {
    setIsDisabled(true)
  }, [info])

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }, [])

  return (
    <SixRowEl>
      <Cell disabled value={state.id} name="id" onChange={handleOnChange} />
      <Cell disabled={isDisabled} value={state.name} name="name" onChange={handleOnChange} />
      <Cell disabled={isDisabled} value={state.age} name="age" onChange={handleOnChange} />
      <Cell disabled={isDisabled} value={state.aboutPerson} name="aboutPerson" onChange={handleOnChange} />
      <DefaultButton onClick={() => (isDisabled ? changeDisabledStatus() : sendChanges())}>
        {isDisabled ? 'change' : 'save'}
      </DefaultButton>
      <DefaultButton onClick={deleteRowAction}>remove</DefaultButton>
    </SixRowEl>
  )
}

export { ChangedRow, Row, FirstRow }
