import React from 'react'
import { ViewProps } from 'react-native'
import { Course } from 'edoc/lib/UniApi'
import * as S from './SubjectCard.styles'

interface SubjectCardProps extends ViewProps {
  course: Course
}

function SubjectCard(props: SubjectCardProps) {
  const { course, ...otherProps } = props
  return (
    <S.Container {...otherProps}>
      <S.DebugText>{JSON.stringify(course, null, 2)}</S.DebugText>
    </S.Container>
)
}

export default SubjectCard
export { SubjectCard }
export type { SubjectCardProps }