import styled from 'styled-components'
import { SixRowEl } from 'src/components/row/style'

export const Container = styled.div`
  width: 90vw;
  padding-top: 24px;
  margin: 0 auto;
  overflow: hidden;
`

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0px -4px 34px rgba(0, 0, 0, 0.16);

  & ${SixRowEl} {
    padding-top: 8px;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 160, 108);
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(94, 91, 91);
  }
`
