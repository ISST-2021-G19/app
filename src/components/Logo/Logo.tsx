import React, { ComponentProps } from 'react'
import type { ViewProps } from 'react-native'
import * as S from './Logo.styles'

export interface LogoProps extends ViewProps {
}

export function Logo(props: LogoProps) {
  return (
    <S.Container {...props}>
      <S.EDocText>eDoc</S.EDocText>
      <S.Separator />
      <S.UniLogoContainer>
        <S.UniLogoImage style={{ width: 120, height: 50 }} /> 

      </S.UniLogoContainer>
      
    </S.Container>
  )
}
