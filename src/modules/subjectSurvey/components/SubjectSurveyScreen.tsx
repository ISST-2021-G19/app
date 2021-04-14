import React from 'react'
import { useRoute } from "@react-navigation/core"
import { Text, View } from "react-native"
import QuestionScreen from './QuestionScreen'

function SubjectSurveyScreen() {
  const { params } = useRoute<any>()

  return <QuestionScreen></QuestionScreen>
}

export { SubjectSurveyScreen }