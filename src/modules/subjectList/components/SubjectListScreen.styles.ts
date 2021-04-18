import styled from 'styled-components/native'
import { Header as BaseHeader } from './Header'
import { SubjectList } from './SubjectList';

export const Container = styled.View`
  padding: 16px;
`

export const Header = styled(BaseHeader)`
  margin-bottom: 16px;
`

export const List = styled(SubjectList)``
