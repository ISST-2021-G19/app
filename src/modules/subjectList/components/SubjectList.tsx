import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useState } from 'react'
import { ActivityIndicator, Pressable,Button,ViewProps, TouchableOpacity} from 'react-native'
import { useCourseList } from '../hooks'
import * as S from './SubjectList.styles'
import * as P from '../../../components/Logo/Logo.styles'
interface SubjectListProps extends ViewProps {}

function SubjectList(props: SubjectListProps) {
  const [loading, courses] = useCourseList()
  const { navigate } = useNavigation()
  const [search, setSearch] = useState('')
  const searchFilterFunction = (text:string) => {
    setSearch(text);
}
return (
    
  <S.Container {...props}>
    <S.ImageContainer>
   <P.eDocImage style={{ width: 170, height: 150 }} />
   <S.CampusLogoImage style={{ width: 250, height: 250}}/>
   <S.UserLogoImage style={{ width: 100, height: 100}}/>
   </S.ImageContainer>
   <S.SearchBox
     placeholder="Buscar..."
     value = {search} 
     onChangeText={(text)=> searchFilterFunction(text)}
        />
    {loading
      ? <ActivityIndicator color="red" />
      
      : courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase())).map(course => (
        <S.ContainerSubject>
          <TouchableOpacity  style = {{height: 50, backgroundColor: "#1f82c0", justifyContent: "center"}} key={course.code} onPress={() => navigate('SubjectSurvey', { subjectId: course.id })}>
          <S.Subject course={course} />
          </TouchableOpacity>
          </S.ContainerSubject>
        ))
    }
  </S.Container>
  )
}
export default SubjectList
export { SubjectList }
export type { SubjectListProps }