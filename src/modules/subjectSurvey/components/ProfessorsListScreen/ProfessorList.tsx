import React, { useState } from 'react'
import { Pressable, ViewProps } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Professor } from 'edoc/lib/UniApi'
import { selectProfessor }  from '../../actions'
import { subjectSurveyProfessorsSelector }  from '../../selectors'
import * as S from './ProfessorList.styles'

export interface ProfessorListProps extends ViewProps {
  onProfessorPress?: (professor: Professor) => void
}

export function ProfessorList(props: ProfessorListProps) {
  const professors = useSelector(subjectSurveyProfessorsSelector)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const filteredProfessors = professors.filter(
    professor => professor.name.toLowerCase().includes(search.toLowerCase()),
  )
  const handlePickProfessor = (professor: Professor) => () => {
    dispatch(selectProfessor(professor))
    props.onProfessorPress?.(professor)
  }
  
  return (
    <S.Container {...props}>
      <S.SearchBox
        placeholder="Buscar..."
        value = {search} 
        onChangeText={setSearch}
      />
      {filteredProfessors.map(professor => (
        <Pressable
          key={professor.name}
          onPress={handlePickProfessor(professor)}>
          <S.Professor professor={professor} />
        </Pressable>
      ))}
    </S.Container>
  )
}
