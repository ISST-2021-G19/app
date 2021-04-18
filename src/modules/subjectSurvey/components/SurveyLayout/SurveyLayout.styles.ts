import styled from 'styled-components/native'
import { Button, Text } from 'edoc/components'
import { SurveyProgressBar } from './SurveyProgressBar'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: stretch;
  padding: 16px;
`

export const ProgressBar = styled(SurveyProgressBar)`
  flex: 0 0 auto;
  margin-bottom: 8px;
`

export const TitleContainer = styled.View``
export const Title = styled(Text)`
  flex: 0 0 auto;
  font-size: 2rem;
  font-weight: 500;
`

export const ChildrenContainer = styled.View`
  flex: 1;
  overflow: scroll;
  margin-bottom: 16px;
`

export const NavigationButtonsContainer = styled.View`
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
`
export const NavigationButton = styled(Button)``
export const NextButton = styled(NavigationButton)``
export const BackButton = styled(NavigationButton)``
