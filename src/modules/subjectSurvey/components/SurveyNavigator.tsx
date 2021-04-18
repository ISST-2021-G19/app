import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProfessorsListScreen } from './ProfessorsListScreen'
import { QuestionScreen, QuestionRouteParams } from './QuestionScreen'
import { ProfessorTraitsScreen } from './ProfessorTraitsScreen'
import { CommentsScreen } from './CommentsScreen'
import { SurveyDoneScreen } from './SurveyDoneScreen'

const Stack = createStackNavigator()

export function SurveyNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfessorsList" component={ProfessorsListScreen} />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        getId={({ params }) => {
          const p = params as QuestionRouteParams
          return String(p.questionIdx)
        }}
      />
      <Stack.Screen name="ProfessorTraits" component={ProfessorTraitsScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="SurveyDone" component={SurveyDoneScreen} />
    </Stack.Navigator>
  )
}
