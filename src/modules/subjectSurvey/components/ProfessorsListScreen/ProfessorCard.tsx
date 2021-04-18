import React from 'react'
import { ViewProps } from 'react-native'
import { Professor      } from 'edoc/lib/UniApi'
import * as S from './ProfessorCard.styles'

export interface ProfessorCardProps extends ViewProps {
  professor: Professor
}

export function ProfessorCard(props: ProfessorCardProps) {
  const { professor, ...otherProps } = props
  return (
    <S.Container {...otherProps}>
      <S.Name>{professor.name}</S.Name>
      <S.Subtitle>Código: {professor.code}</S.Subtitle>
    </S.Container>
  )
}
