import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12fr 26fr 12fr 50fr;
  background: rgb(54, 52, 52);
  color: rgb(250, 250, 250);
`

export const FirstRow = styled(Row)`
  color: rgb(169, 169, 169);
`

export const SixRowEl = styled(Row)`
  grid-template-columns: 12fr 26fr 12fr 30fr 10fr 10fr;
`

export const FiveRowEl = styled(Row)`
  padding-top: 8px;
  grid-template-columns: 12fr 26fr 12fr 30fr 20fr;
`
