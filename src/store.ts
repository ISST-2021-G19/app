import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import auth, { State as AuthState } from './modules/auth/reducer'
import subjectList, { State as SubjectListState } from './modules/subjectList/reducer'
import subjectSurvey, { State as SubjectSurveyState } from './modules/subjectSurvey/reducer'

export interface State {
  auth: AuthState
  subjectList: SubjectListState
  subjectSurvey: SubjectSurveyState
}

export const rootReducer = combineReducers<State>({
  auth,
  subjectList,
  subjectSurvey,
})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
})
 