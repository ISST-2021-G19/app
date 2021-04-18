import styled from 'styled-components/native'
import { Text } from 'edoc/components'
import { ProfessorList } from './ProfessorList'

export const Container = styled.View`
  padding: 16px;
`

export const List = styled(ProfessorList)``

export const SubjectNameContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`

export const SubjectName = styled(Text)`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
`
