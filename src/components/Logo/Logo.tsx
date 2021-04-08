import React, { ComponentProps } from 'react'
import type { ViewProps } from 'react-native'
import * as S from './Logo.styles'

export interface LogoProps extends ViewProps {
}

export function Logo(props: LogoProps) {
  return (
    <S.Container {...props}>
      <S.eDocImage style={{ width: 150, height: 100 }} />
      <S.Separator />
      <S.UniLogoContainer>
        <S.UniLogoImage style={{ width: 120, height: 50 }} /> 

      </S.UniLogoContainer>
      
    </S.Container>
  )
}
