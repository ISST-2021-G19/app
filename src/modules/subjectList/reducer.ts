import { createReducer } from '@reduxjs/toolkit'
import { Course } from 'edoc/lib/UniApi'
import { fetchCourses } from './actions'

interface State {
  isLoading: boolean
  courses: Course[]
  error: string | null
}

const initialState: State = {
  isLoading: false,
  courses: [],
  error: null,
}

const reducer = createReducer<State>(initialState, builder =>
  builder
  .addCase(fetchCourses.pending, state => {
    state.isLoading = true
  })
  .addCase(fetchCourses.fulfilled, (state, action) => {
    state.isLoading = false
    state.courses = action.payload
    state.error = null
  })
  .addCase(fetchCourses.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.error.message ?? null
  })
)

export default reducer
export type { State }