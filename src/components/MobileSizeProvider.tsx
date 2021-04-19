import React, { ReactNode } from 'react'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-self: stretch;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #d0e2ea;
`

const App = styled.View`
  flex: 1;
  
  min-width: 320px;
  max-width: 100%;
  max-height: 560px;

  justify-self: stretch;
  align-self: center;
  background-color: white;

  overflow: hidden;
  border-radius: 8px;
`

export interface MobileSizeProvider extends ViewProps {
  children: ReactNode
}

export function MobileSizeProvider(props: MobileSizeProvider) {
  return (
    <Container {...props}>
      <App>{props.children}</App>
    </Container>
  )
}
