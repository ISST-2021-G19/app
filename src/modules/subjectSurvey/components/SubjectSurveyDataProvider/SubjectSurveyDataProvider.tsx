import React, { ReactNode, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjectSurveyData } from '../../actions';
import { hasSubjectSurveyDataErrorSelector, isLoadingSubjectSurveyDataSelector } from '../../selectors';
import { useSurveyRouteParams } from './useSurveyRouteParams';

export interface SubjectSurveyDataProviderProps {
  fallback?: ReactNode
  children: ReactNode
}

export function SubjectSurveyDataProvider(props: SubjectSurveyDataProviderProps) {
  const { subjectId } = useSurveyRouteParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSubjectSurveyDataSelector)
  const hasError = useSelector(hasSubjectSurveyDataErrorSelector)

  useEffect(() => {
    dispatch(fetchSubjectSurveyData(subjectId))
  }, [subjectId])

  useEffect(() => {
    if (hasError) {
      throw new Error('Couldn\'t fetch survey data')
    }
  }, [hasError])

  return isLoading
    ? <>{props.fallback ?? <ActivityIndicator />}</>
    : <>{props.children}</>
}
