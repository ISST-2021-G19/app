import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ActivityIndicator, Pressable, ViewProps } from 'react-native'
import { useCourseList } from '../hooks'
import * as S from './SubjectList.styles'

interface SubjectListProps extends ViewProps {}

function SubjectList(props: SubjectListProps) {
  const [loading, courses] = useCourseList()
  const { navigate } = useNavigation()

  return (
    <S.Container {...props}>
      {loading
        ? <ActivityIndicator color="red" />
        : courses.map(course => (
            <Pressable key={course.code} onPress={() => navigate('SubjectSurvey', { subjectId: course.id })}>
              <S.Subject course={course}  />
            </Pressable>
          ))
      }
    </S.Container>
  )
}

export default SubjectList
export { SubjectList }
export type { SubjectListProps }