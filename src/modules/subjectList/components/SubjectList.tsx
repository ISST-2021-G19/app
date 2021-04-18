import React, { useState } from 'react'
import { ActivityIndicator, Pressable,ViewProps } from 'react-native'
import { Course } from 'edoc/lib/UniApi'
import { useCourseList } from '../hooks'
import * as S from './SubjectList.styles'

export interface SubjectListProps extends ViewProps {
  onSubjectPress?: (subject: Course) => void
}

export function SubjectList(props: SubjectListProps) {
  const [search, setSearch] = useState('')
  const [loading, courses] = useCourseList()
  const filteredCourses = courses.filter(
    course => course.name.toLowerCase().includes(search.toLowerCase()),
  )
  
  return (
    <S.Container {...props}>
      <S.SearchBox
        placeholder="Buscar..."
        value = {search} 
        onChangeText={setSearch}
      />
      {loading
        ? <ActivityIndicator color="red" />
        : filteredCourses.map(course => (
          <Pressable
            key={course.code}
            onPress={() => props.onSubjectPress?.(course)}>
            <S.Subject course={course} />
          </Pressable>
        ))
    }
  </S.Container>
  )
}
