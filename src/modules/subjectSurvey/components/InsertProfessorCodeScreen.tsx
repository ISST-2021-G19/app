import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useCallback, useState } from 'react'
import { ViewProps } from 'react-native'
import { useDispatch } from 'react-redux'
import { validateProfessorCode } from '../actions'
import * as S from './InsertProfessorCodeScreen.styles'

interface InsertProfessorCodeScreenProps extends ViewProps {}

function InsertProfessorCodeScreen(props: InsertProfessorCodeScreenProps) {
  const { navigate } = useNavigation()
  const { params } = useRoute<any>()
  const [professorCode, setProfessorCode] = useState('00569')
  const dispatch = useDispatch()
  const doValidateCode = useCallback(async () => {
    await dispatch(validateProfessorCode({ code: professorCode }))
    navigate('SurveyQuestion', {
      subjectId: params.subjectId,
      professorCode: professorCode,
      questionId: 1,
    })
  }, [professorCode])

  return (
    <S.Container {...props}>
      <S.ContentBox>
        <S.Field
          label="Professor's code"
          inputProps={{ value: professorCode, onChangeText: setProfessorCode }}
        />
        <S.Button onPress={doValidateCode}>Continue</S.Button>
      </S.ContentBox>
    </S.Container>
  )
}

export default InsertProfessorCodeScreen
export { InsertProfessorCodeScreen }
export type { InsertProfessorCodeScreenProps }