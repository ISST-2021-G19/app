import { useNavigation } from '@react-navigation/core'
import React from 'react'
import * as S from './ProfessorTraitsScreen.styles'

export function ProfessorTraitsScreen() {
  const { navigate } = useNavigation()
  return (
    <S.Layout
      progress={90}
      title="Comentarios"
      onNextButtonPress={() => navigate('Comments')}
    >
      <S.TraitsPicker  />
    </S.Layout>
  )
}
