import styled from 'styled-components/native'
import { TextInput } from 'edoc/components';
import { SubjectCard } from './SubjectCard'

export const Container = styled.View``


export const Subject = styled(SubjectCard)`
  margin-bottom: 8px;
`

export const SearchBox = styled(TextInput)`
  margin-bottom: 16px;
`
