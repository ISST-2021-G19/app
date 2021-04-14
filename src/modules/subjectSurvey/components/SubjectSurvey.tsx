import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { ViewProps } from 'react-native'
import { useRoute } from "@react-navigation/core"
import { Text, Pressable} from "react-native"
import { useProfessorList } from '../hooks'
import * as S from './SubjectSurvey.styles'


interface SubjectSurveyProps extends ViewProps{}

function SubjectSurvey(props: SubjectSurveyProps) {
  const { params } = useRoute<any>()
  const [professors] = useProfessorList(params.subjectId)
  const { navigate } = useNavigation()

  return(
    <S.Container {...props}>
      <S.Title>{params?.course.name ?? 'nothing'}</S.Title>
      <S.Subtitle>Listado de profesores</S.Subtitle>
      
      <S.Pressable onPress={() => navigate('SubjectEstadistic')}>
        <S.Text>Ver Estadísticas</S.Text>
      </S.Pressable>
      

      {
        professors.map(professor => (
          <S.Professor onPress={() => navigate('SubjectQuest')}>
            <S.Text>{professor.name} </S.Text>
          </S.Professor>
        ))
      }
      
    </S.Container>
  )
}


export default SubjectSurvey
export { SubjectSurvey }
export type { SubjectSurveyProps }
