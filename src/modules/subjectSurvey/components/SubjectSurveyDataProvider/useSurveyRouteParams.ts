import { useMemo } from 'react'
import { useRoute } from '@react-navigation/core'

export interface SubjectSurveyRouteParams {
  subjectId: string
}

function isValidSubjectSurveyRouteParams(params: any): params is SubjectSurveyRouteParams {
  return typeof params?.subjectId === 'string'
}

function assertSubjectSurveyRouteParams(params: any): SubjectSurveyRouteParams {
  if (!isValidSubjectSurveyRouteParams(params)) {
    throw new Error('invalid route params')
  }

  return params
}

export function useSurveyRouteParams(): SubjectSurveyRouteParams {
  const { params } = useRoute()
  const p = useMemo(() => assertSubjectSurveyRouteParams(params), [params])
  return p
}
