import styled from 'styled-components/native'

export const Container = styled.View`
  position: relative;
  background-color: red;
  height: 24px;
  border-radius: 16px;
  overflow: hidden;
`

export const Bar = styled.View<{ width: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: blue;
  width: ${props => props.width}%;
`

