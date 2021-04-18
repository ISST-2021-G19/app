import { Text } from 'edoc/components'
import styled, { css } from 'styled-components/native'

export const Container = styled.View``

export const TraitPill = styled.View<{ active?: boolean }>`
  ${props => props.active && css`
    background-color: red;
  `}
`

export const TraitPillText = styled(Text)``
