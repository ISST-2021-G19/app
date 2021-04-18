import React from 'react'
import { useNavigation } from '@react-navigation/core'
import * as S from './ProfessorTraitsScreen.styles'

export function ProfessorTraitsScreen() {
  const { navigate } = useNavigation()
  return (
    <S.Layout
      progress={85}
      title="Comentarios"
      onNextButtonPress={() => navigate('Comments')}
    >
      <S.TraitsPicker  />
    </S.Layout>
  )
}
