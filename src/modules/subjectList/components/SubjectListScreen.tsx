import React from 'react'
import { useNavigation } from '@react-navigation/core'
import * as S from './SubjectListScreen.styles'
import { ScrollView } from 'react-native'

function SubjectListScreen() {
  const { navigate } = useNavigation()

  return (
    <S.Container>
      <S.Header />
      <S.List
        onSubjectPress={subject => navigate('SubjectSurvey', { subjectId: subject.id })}
      />
    </S.Container>
  )
}

export { SubjectListScreen }