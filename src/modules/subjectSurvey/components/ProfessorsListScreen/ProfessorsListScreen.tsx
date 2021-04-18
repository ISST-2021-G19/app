import React from 'react'
import { ViewProps } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { subjectSurveySubjectSelector } from '../../selectors'
import * as S from './ProfessorsListScreen.styles'

export interface ProfessorsListScreenProps extends ViewProps {}

export function ProfessorsListScreen(props: ProfessorsListScreenProps) {
  const { navigate } = useNavigation()
  const subject = useSelector(subjectSurveySubjectSelector)

  return (
    <S.Container {...props}>
      <S.SubjectNameContainer>
        <S.SubjectName>{subject.name}</S.SubjectName>
      </S.SubjectNameContainer>
      <S.List
        onProfessorPress={() => navigate('Question', { questionIdx: 1 })}
      />
    </S.Container>
  )
}
