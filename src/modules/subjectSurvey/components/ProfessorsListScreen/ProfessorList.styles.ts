import styled from 'styled-components/native'
import { TextInput } from 'edoc/components';
import { ProfessorCard } from './ProfessorCard'

export const Container = styled.View`
`

export const SearchBox = styled(TextInput)`
  margin-bottom: 16px;
`

export const Professor = styled(ProfessorCard)`
  margin-bottom: 8px;
`

