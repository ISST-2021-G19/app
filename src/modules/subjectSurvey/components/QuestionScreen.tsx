import React from 'react'
import * as S from './QuestionScreen.styles'

interface QuestionScreenProps {
  className?: string
}

function QuestionScreen(props: QuestionScreenProps) {
  return (
    <S.Wrapper className={props.className}>
      
    </S.Wrapper>
)
}

export default QuestionScreen
export { QuestionScreen }
export type { QuestionScreenProps }