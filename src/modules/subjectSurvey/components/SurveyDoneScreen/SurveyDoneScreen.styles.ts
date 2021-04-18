import styled from 'styled-components/native'
import { Button, Text, Logo as BaseLogo } from 'edoc/components'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Logo = styled(BaseLogo)`
  height: 100px;
  width: 100px;
`

export const SubjectName = styled(Text)``

export const Description = styled(Text)``

export const DoneButton = styled(Button)``
