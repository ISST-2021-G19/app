import { useNavigation } from '@react-navigation/core'
import React, { ReactNode } from 'react'
import { ViewProps } from 'react-native'
import * as S from './SurveyLayout.styles'

interface SurveyLayoutProps extends ViewProps {
  progress: number
  title: ReactNode | string
  children: ReactNode

  disableBackButton?: boolean
  backButtonChildren?: ReactNode
  onBackButtonPress?: () => void

  disableNextButton?: boolean
  nextButtonChildren?: ReactNode
  onNextButtonPress?: () => void
}

function SurveyLayout(props: SurveyLayoutProps) {
  const {
    progress,
    title,
    children,
    disableBackButton,
    backButtonChildren,
    onBackButtonPress,
    disableNextButton,
    nextButtonChildren,
    onNextButtonPress,
    ...otherProps
  } = props
  const { goBack } = useNavigation()
  const handleBackButtonPress = () => {
    goBack()
  }
  return (
    <S.Container {...otherProps}>
      <S.ProgressBar progress={progress} />
      <S.TitleContainer>
        {typeof title === 'string'
          ? <S.Title>{title}</S.Title>
          : {title}}
      </S.TitleContainer>
      <S.ChildrenContainer>
        {children}
      </S.ChildrenContainer>
      <S.NavigationButtonsContainer>
        <S.BackButton
          disabled={disableBackButton}
          onPress={onBackButtonPress ?? handleBackButtonPress}
        >
          {backButtonChildren ?? 'Back' }
        </S.BackButton>
        <S.NextButton
          disabled={disableNextButton}
          onPress={onNextButtonPress}
        >
          {nextButtonChildren ?? 'Next' }
        </S.NextButton>
      </S.NavigationButtonsContainer>
    </S.Container>
  )
}

export default SurveyLayout
export { SurveyLayout }
export type { SurveyLayoutProps }