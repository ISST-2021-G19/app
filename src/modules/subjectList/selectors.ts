import { createSelector } from '@reduxjs/toolkit';
import { State as SubjectListState } from './reducer'

type State = { subjectList: SubjectListState }

const courseListStateSelector = (state: State) => state.subjectList

const isLoadingCourseListSelector =  createSelector(
  courseListStateSelector,
  state => state.isLoading,
)

const courseListSelector =  createSelector(
  courseListStateSelector,
  state => state.courses,
)

const hasCourseListErrorSelector =  createSelector(
  courseListStateSelector,
  state => Boolean(state.error),
)

const courseListErrorSelector =  createSelector(
  courseListStateSelector,
  state => state.error,
)

const courseListHookSelector = createSelector(
  isLoadingCourseListSelector,
  courseListSelector,
  courseListErrorSelector,
  (loading, courses, error) =>
    [loading, courses, error] as [typeof loading, typeof courses, typeof error],
)

export {
  courseListStateSelector,
  isLoadingCourseListSelector,
  courseListSelector,
  hasCourseListErrorSelector,
  courseListErrorSelector,
  courseListHookSelector,
}