import { createReducer } from '@reduxjs/toolkit'
import { Professor } from 'edoc/lib/UniApi'
import { fetchProfessors } from './actions'

interface StateS {
  isLoading: boolean
  professors: Professor[]
  error: string | null
}

const initialState: StateS = {
  isLoading: false,
  professors: [],
  error: null,
}

const reducer = createReducer<StateS>(initialState, builder =>
  builder
  .addCase(fetchProfessors.pending, state => {
    state.isLoading = true
  })
  .addCase(fetchProfessors.fulfilled, (state, action) => {
    state.isLoading = false
    state.professors = action.payload
    state.error = null
  })
  .addCase(fetchProfessors.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.error.message ?? null
  })
)

export default reducer
export type { StateS }