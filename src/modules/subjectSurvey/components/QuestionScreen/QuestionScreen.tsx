import React from 'react'
import * as S from './QuestionScreen.styles'
import {
  useQuestion,
  useQuestionRouteParams,
  useQuestionAnswerValue,
  useDispatchAnswerQuestion,
  useNavigateToNextQuestion,
  useProgressValue,
} from './hooks'

interface QuestionScreenProps {
  className?: string
}

function QuestionScreen(props: QuestionScreenProps) {
  const { questionIdx } = useQuestionRouteParams()
  const question = useQuestion()
  const progress = useProgressValue()
  const value = useQuestionAnswerValue()
  const dispatchAnswerQuestion = useDispatchAnswerQuestion()
  const navigateToNextQuestion = useNavigateToNextQuestion()

  return (
    <S.Layout
      progress={progress}
      title={`Pregunta ${questionIdx}`}
      disableBackButton={questionIdx === 1}
      disableNextButton={value === null}
      onNextButtonPress={() => navigateToNextQuestion()}
    >
      <S.QuestionRating
        question={question.question}
        value={value}
        onValueChange={value => {
          dispatchAnswerQuestion(value)
          navigateToNextQuestion()
        }}
      />
    </S.Layout>
)
}

export default QuestionScreen
export { QuestionScreen }
export type { QuestionScreenProps }