import styled from 'styled-components'
import { CellInterface } from 'src/interface'

export const Cell = styled.input<CellInterface>`
  display: flex;
  align-items: center;
  color: inherit;
  padding: 16px 12px;
  background: none;
  border: none;
  outline: none;
  transition: all 100ms linear;

  &:not(:disabled) {
    cursor: pointer;
    font-weight: 600;
    font-style: italic;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 4%);
  }
`
