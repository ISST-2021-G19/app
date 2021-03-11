import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const EDocText = styled.Text`
  font-size: 24px;
  color: #555;
`

export const Separator = styled.View`
  background-color: #555;
  width: 1px;
  height: 100%;
  margin-left: 16px;
  margin-right: 16px;
`

export const UniLogoContainer = styled.View``

export const UniLogoImage = styled.Image.attrs({
  source: require('./upm_logo.png'),
  resizeMode: 'contain',
})``