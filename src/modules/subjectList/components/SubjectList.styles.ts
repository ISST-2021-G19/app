import styled from 'styled-components/native'
import { SubjectCard } from './SubjectCard'
import { TextInput as SearchTextInput } from "edoc/components";
export const Container = styled.View`
  flex:1;
  padding: 8px;
  background-color: white;
  
`
export const ContainerSubject = styled.View`
  height: 50opx;
  padding: 8px;
  background-color: white;
`
export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justifyContent:space-around;
  
`
export const LogoContainer = styled.View`
  high:100%
  flex-direction: row;
  align-items: center;
  
`
export const Subject = styled(SubjectCard)`
  margin-bottom: 8px;
`
export const SearchBox = styled(SearchTextInput)`
  padding: 8px;
  border: 1px solid #1f82c0;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const CampusLogoImage = styled.Image.attrs({
  source: require('../UPM_CAMPUS.png'),
  resizeMode: 'contain',
})``

export const UserLogoImage = styled.Image.attrs({
  source: require('../user.png'),
  resizeMode: 'contain',
})``