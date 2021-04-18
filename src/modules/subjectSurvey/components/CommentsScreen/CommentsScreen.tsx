import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitSurveyData, updateComment } from '../../actions'
import { subjectSurveyCommentsSelector } from '../../selectors'
import * as S from './CommentsScreen.styles'

export function CommentsScreen() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const comment = useSelector(subjectSurveyCommentsSelector)
  const handleCommentChange = (text: string) => {
    dispatch(updateComment(text))
  }
  const submitSurvey = async () => {
    await dispatch(submitSurveyData())
    navigate('SurveyDone')
  }

  return (
    <S.Layout
      progress={90}
      title="Comentarios"
      onNextButtonPress={submitSurvey}
    >
      <S.CommentsBox
        multiline={true}
        value={comment}
        onChangeText={handleCommentChange}
      />
    </S.Layout>
  )
}
