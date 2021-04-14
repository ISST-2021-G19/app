import React, { ReactNode, useMemo } from 'react'
import { ViewProps } from 'react-native'
import * as S from './SurveyRatingQuestion.styles'

interface SurveyRatingQuestionProps extends ViewProps {
  question: ReactNode | string
  value: number | null | undefined
  onValueChange?: (value: number) => void
}

function SurveyRatingQuestion(props: SurveyRatingQuestionProps) {
  const {
    question,
    value,
    onValueChange,
    ...otherProps
  } = props
  const options = useMemo(() => [
    { value: 5, label: '++' },
    { value: 4, label: '+'  },
    { value: 3, label: '+-' },
    { value: 2, label: '-'  },
    { value: 1, label: '--' },
  ], [])

  return (
    <S.Container {...otherProps}>
      <S.QuestionContainer>
        {typeof question === 'string'
          ? <S.Question>{question}</S.Question>
          : {question}}
      </S.QuestionContainer>
      <S.ButtonsContainer>
        {options.map(opt => (
          <S.Button
            key={opt.value}
            active={opt.value === value}
            onPress={() => onValueChange?.(opt.value)}
          >
              {opt.label}
          </S.Button>
        ))}
      </S.ButtonsContainer>
    </S.Container>
)
}

export default SurveyRatingQuestion
export { SurveyRatingQuestion }
export type { SurveyRatingQuestionProps }