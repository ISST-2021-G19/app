import React, { useMemo } from 'react'
import { ViewProps } from 'react-native'
import * as S from './SurveyProgressBar.styles'

interface SurveyProgressBarProps extends ViewProps {
  progress: number
}

function SurveyProgressBar(props: SurveyProgressBarProps) {
  const progress = useMemo(() => {
    if (props.progress < 0) {
      return 0
    }
    if (props.progress > 100) {
      return 100
    }
    return props.progress
  }, [props.progress])
  
  return (
    <S.Container >
      <S.Bar width={progress}/>
    </S.Container>
)
}

export default SurveyProgressBar
export { SurveyProgressBar }
export type { SurveyProgressBarProps }