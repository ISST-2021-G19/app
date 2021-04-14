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

  return (
    <S.Container {...otherProps}>
      <S.ProgressBar progress={props.progress} />
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
          disabled={props.disableBackButton}
          onPress={props.onBackButtonPress}
        >
          {props.backButtonChildren ?? 'Back' }
        </S.BackButton>
        <S.NextButton
          disabled={props.disableNextButton}
          onPress={props.onNextButtonPress}
        >
          {props.nextButtonChildren ?? 'Next' }
        </S.NextButton>
      </S.NavigationButtonsContainer>
    </S.Container>
  )
}

export default SurveyLayout
export { SurveyLayout }
export type { SurveyLayoutProps }