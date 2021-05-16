import { createSelector } from '@reduxjs/toolkit';
import type { State } from 'edoc/store'

const subjectSurveyStateSelector = (state: State) => state.subjectSurvey

const isLoadingSubjectSurveyDataSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.isLoading,
)

const hasSubjectSurveyDataErrorSelector = createSelector(
  subjectSurveyStateSelector,
  state => Boolean(state.error),
)


const subjectSurveyProfessorsSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.professors,
)

const subjectSurveySubjectSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.subject!,
)

const subjectSurveyQuestionsSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.questions,
)

const subjectSurveyQuestionsAnswersSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.alumniAnswers,
)

const subjectSurveyAvailableProfessorTraitsSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.professorTraits,
)

const subjectSurveySelectedProfessorTraitsSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.alumniProfessorTraits,
)

const subjectSurveyCommentsSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.alumniComments,
)

const subjectSurveyProfessorSelector = createSelector(
  subjectSurveyStateSelector,
  state => state.professor,
)

const subjectSurveyFilledDataSelector = createSelector(
  subjectSurveySubjectSelector,
  subjectSurveyProfessorSelector,
  subjectSurveyQuestionsAnswersSelector,
  subjectSurveySelectedProfessorTraitsSelector,
  subjectSurveyCommentsSelector,
  (subject, professor, answers, traits, comments) =>
    ({
      subjectId: subject.id,
      professor: professor?.code,
      answers,
      traits,
      comments,
     })
)

export {
  subjectSurveyStateSelector,
  isLoadingSubjectSurveyDataSelector,
  subjectSurveyQuestionsSelector,
  hasSubjectSurveyDataErrorSelector,
  subjectSurveyProfessorsSelector,
  subjectSurveySubjectSelector,
  subjectSurveyQuestionsAnswersSelector,
  subjectSurveyAvailableProfessorTraitsSelector,
  subjectSurveySelectedProfessorTraitsSelector,
  subjectSurveyCommentsSelector,
  subjectSurveyFilledDataSelector,
}
