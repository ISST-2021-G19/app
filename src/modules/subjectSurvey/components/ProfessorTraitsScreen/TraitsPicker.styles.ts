import { Text } from 'edoc/components'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const TraitPill = styled.View<{ active?: boolean }>`
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  background-color: #ccc;
  ${props => props.active && css`
    background-color: lightgreen;
  `}
`

export const TraitPillText = styled(Text)`
`
