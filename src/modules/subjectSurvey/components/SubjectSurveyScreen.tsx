import React from 'react'
import { useRoute } from "@react-navigation/core"
import { Text, View } from "react-native"

function SubjectSurveyScreen() {
  const { params } = useRoute<any>()

  return <View><Text>{params?.subjectId ?? 'nothing'}</Text></View>
}

export { SubjectSurveyScreen }