import React, { useMemo } from 'react'
import { Pressable, ViewProps } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleProfessorTrait } from '../../actions'
import {
  subjectSurveyAvailableProfessorTraitsSelector,
  subjectSurveySelectedProfessorTraitsSelector,
} from '../../selectors'
import * as S from './TraitsPicker.styles'

export interface TraitsPickerProps extends ViewProps {}

export function TraitsPicker(props: TraitsPickerProps) {
  const availableTraits = useSelector(subjectSurveyAvailableProfessorTraitsSelector)
  const selectedTraits = useSelector(subjectSurveySelectedProfessorTraitsSelector)
  const selectedTraitsLookupSet = useMemo(() => new Set(selectedTraits), [availableTraits, selectedTraits])
  const dispatch = useDispatch()
  const toggleTrait = (traitId: string) => () => {
    dispatch(toggleProfessorTrait(traitId))
  }
  return (
    <S.Container {...props}>
      {availableTraits.map(trait => (
        <Pressable key={trait.id} onPress={toggleTrait(trait.id)}>
          <S.TraitPill active={selectedTraitsLookupSet.has(trait.id)}>
            <S.TraitPillText>{trait.label}</S.TraitPillText>
          </S.TraitPill>
        </Pressable>
      ))}
    </S.Container>
  )
}
