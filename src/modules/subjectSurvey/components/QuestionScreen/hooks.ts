import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute, useNavigation } from '@react-navigation/core'
import { answerRatingQuestion } from '../../actions'
import { subjectSurveyQuestionsSelector, subjectSurveyQuestionsAnswersSelector } from '../../selectors'

export interface QuestionRouteParams {
  questionIdx: number
}

function isValidQuestionRouteParams(params: any): params is QuestionRouteParams {
  return typeof params?.questionIdx === 'number'
}

function assertQuestionRouteParams(params: any): QuestionRouteParams {
  if (!isValidQuestionRouteParams(params)) {
    throw new Error('invalid route params')
  }

  return params
}

export function useQuestionRouteParams(): QuestionRouteParams {
  const { params } = useRoute()
  const p = useMemo(() => assertQuestionRouteParams(params), [params])
  return p
}

export function useQuestions() {
  const questions = useSelector(subjectSurveyQuestionsSelector)
  return questions
}

export function useQuestion() {
  const params = useQuestionRouteParams()
  const questions = useQuestions()
  const question = questions[params.questionIdx - 1]
  return question
}

export function useQuestionAnswerValue(): number | null {
  const question = useQuestion()
  const answers = useSelector(subjectSurveyQuestionsAnswersSelector)

  return answers[question.id] ?? null
}

export function useProgressValue(): number {
  const { questionIdx } = useQuestionRouteParams()
  const idx = questionIdx - 1
  const questions = useQuestions()

  return (0.05 + 0.85 * (idx / questions.length)) * 100
}

export function useDispatchAnswerQuestion() {
  const dispatch = useDispatch()
  const question = useQuestion()
  const dispatchAnswerRatingQuestion = useCallback((value: number) => {
    dispatch(answerRatingQuestion({ questionId: question.id, value }))
  }, [question.id])

  return dispatchAnswerRatingQuestion
}

export function useNavigateToNextQuestion() {
  const { questionIdx } = useQuestionRouteParams()
  const { navigate } = useNavigation()
  const questions = useQuestions()

  const navigateToNextScreen = useCallback(() => {
    const nextQuestionIdx = questionIdx + 1
    if (nextQuestionIdx < questions.length) {
      navigate('Question', { questionIdx: nextQuestionIdx })
    } else {
      navigate('ProfessorTraits')
    }
  }, [questionIdx, questions.length])

  return navigateToNextScreen
}
