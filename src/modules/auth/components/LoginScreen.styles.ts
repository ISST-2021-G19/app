import styled from 'styled-components/native'
import {
  Button as BaseButton,
  Logo as BaseLogo,
  Field as BaseField,
  PasswordInput as BasePasswordInput,
} from 'edoc/components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoginBox = styled.View``

export const Logo = styled(BaseLogo)`
  margin-bottom: 40px;
`

export const Field = styled(BaseField)`
  margin-bottom: 8px;
`

export const PasswordInput = styled(BasePasswordInput)``

export const Button = styled(BaseButton)``
