import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ViewProps } from 'react-native'
import { useSelector } from 'react-redux'
import { subjectSurveySubjectSelector } from '../../selectors'
import * as S from './SurveyDoneScreen.styles'

export interface SurveyDoneScreenProps extends ViewProps {}

export function SurveyDoneScreen(props: SurveyDoneScreenProps) {
  const subject = useSelector(subjectSurveySubjectSelector)
  const { navigate } = useNavigation()
  const navigateToHome = () => {
    // FIXME: We should reset the navigation state here in order to prevent crashes on back
    navigate('SubjectList')
  }

  return (
    <S.Container {...props}>
      <S.Logo />
      <S.SubjectName>
        {subject.name}
      </S.SubjectName>
      <S.Description>
        Encuesta enviada
      </S.Description>
      <S.DoneButton onPress={navigateToHome}>
        Volver al inicio
      </S.DoneButton>
    </S.Container>
  )
}
