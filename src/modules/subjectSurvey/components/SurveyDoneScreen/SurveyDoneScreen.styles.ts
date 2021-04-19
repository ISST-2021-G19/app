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
  margin-bottom: 16px;
`

export const SubjectName = styled(Text)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled(Text)`
  margin-bottom: 16px;
`

export const DoneButton = styled(Button)``
