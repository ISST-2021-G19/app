import { Text } from 'edoc/components/Text'
import React from 'react'
import * as S from './QuestionScreen.styles'

interface QuestionScreenProps {
  className?: string
}

function QuestionScreen(props: QuestionScreenProps) {
  return (
    <S.Layout
      progress={34}
      title="Title"
    >
      <S.QuestionRating
        question="Am I a good boy?"
        value={2}
        onValueChange={console.log}
      />
    </S.Layout>
)
}

export default QuestionScreen
export { QuestionScreen }
export type { QuestionScreenProps }