import styled, { css } from 'styled-components/native'
import { Button as BaseButton } from 'edoc/components'
import { Text } from 'edoc/components'

export const Container = styled.View``

export const QuestionContainer = styled.View`
  margin-bottom: 16px;
`

export const Question = styled(Text)``

export const ButtonsContainer = styled.View``

export const Button = styled(BaseButton)<{ active?: boolean }>`
  margin-bottom: 8px;
  ${props => props.active && css`background-color: lightgreen;`}
`
