import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './modules/auth/reducer'
import subjectList from './modules/subjectList/reducer'
import subjectSurvey from './modules/subjectSurvey/reducer'

const store = configureStore({
  devTools: true,
  reducer: combineReducers({
    auth,
    subjectList,
    subjectSurvey,
  }),
})

export { store }