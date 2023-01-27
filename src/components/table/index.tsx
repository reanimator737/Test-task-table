import React from 'react'
import { Container, TableContent } from './style'
import { ChangedRow, FirstRow } from '../row/changedRow'
import { useSelector } from 'react-redux'
import { InputRow } from 'src/components/row/inputRow'
import { RootState } from 'src/interface'
import { Cell } from 'src/components/cell/style'

export const Table: React.FC = () => {
  const data = useSelector((state: RootState) => state.data)

  return (
    <Container>
      <FirstRow>
        <Cell value="Id" disabled />
        <Cell value="Name" disabled />
        <Cell value="Age" disabled />
        <Cell value="About person" disabled />
      </FirstRow>

      <TableContent>
        {data.map(({ id, aboutPerson, age, name }) => {
          return <ChangedRow aboutPerson={aboutPerson} age={age} id={id} name={name} key={id} />
        })}
      </TableContent>

      <InputRow />
    </Container>
  )
}
