import styled from 'styled-components/native'
import {
  Button as BaseButton,
  Field as BaseField,
} from 'edoc/components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ContentBox = styled.View``

export const Field = styled(BaseField)`
  margin-bottom: 8px;
`

export const Button = styled(BaseButton)``
