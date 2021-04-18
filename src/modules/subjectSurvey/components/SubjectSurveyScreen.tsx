import React from 'react'
import { SubjectSurveyDataProvider } from './SubjectSurveyDataProvider';
import { SurveyNavigator } from './SurveyNavigator';

export function SubjectSurveyScreen() {
  return (
    <SubjectSurveyDataProvider>
      <SurveyNavigator />
    </SubjectSurveyDataProvider>
  )
}
