import { createSelector } from '@reduxjs/toolkit';
import { StateS as SubjectSurveyState  } from './reducer'

type StateS = { subjectSurvey: SubjectSurveyState }

const professorListStateSelector = (state: StateS) => state.subjectSurvey

const isLoadingProfessorListSelector =  createSelector(
  professorListStateSelector,
  state => state.isLoading,
)
const professorListSelector =  createSelector(
  professorListStateSelector,
  state => state.professors,
)

const hasProfessorListErrorSelector =  createSelector(
  professorListStateSelector,
  state => Boolean(state.error),
)

const professorListErrorSelector =  createSelector(
  professorListStateSelector,
  state => state.error,
)

const professorListHookSelector = createSelector(
  isLoadingProfessorListSelector,
  professorListSelector,
  professorListErrorSelector,
  (loading, professor, error) =>
    [loading, professor, error] as [typeof loading, typeof professor, typeof error],
)

export {
  professorListStateSelector,
  isLoadingProfessorListSelector,
  professorListSelector,
  hasProfessorListErrorSelector,
  professorListErrorSelector,
  professorListHookSelector,
}