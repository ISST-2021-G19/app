import { createReducer } from '@reduxjs/toolkit'
import { Professor, Course, SubjectRating, ProfessorTrait, SurveyQuestion } from 'edoc/lib/UniApi'
import * as A from './actions'

interface State {
  isLoading: boolean
  error: string | null

  subject: Course | null,
  subjectRating: SubjectRating
  questions: SurveyQuestion[]
  professors: Professor[]
  professorTraits: ProfessorTrait[]

  professor: Professor | null
  alumniAnswers: Record<string, number>
  alumniProfessorTraits: string[]
  alumniComments: string
}

const initialState: State = {
  isLoading: true,
  error: null,

  subject: null,
  subjectRating: {
    difficulty: 0,
    lessons: 0,
    resources: 0,
  },
  questions: [],
  professors: [],
  professorTraits: [],

  professor: null,
  alumniAnswers: {},
  alumniProfessorTraits: [],
  alumniComments: '',
}

const reducer = createReducer<State>(initialState, builder =>
  builder
  .addCase(A.fetchSubjectSurveyData.pending, state => {
    state.isLoading = true
  })
  .addCase(A.fetchSubjectSurveyData.fulfilled, (state, action) => {
    state.isLoading = false
    state.error = null

    const { subject, subjectRating, surveyQuestions, professors, professorTraits } = action.payload

    state.subject = subject
    state.subjectRating = subjectRating
    state.questions = surveyQuestions
    state.professors = professors
    state.professorTraits  = professorTraits
  })
  .addCase(A.fetchSubjectSurveyData.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.error.message ?? null
  })
  .addCase(A.selectProfessor, (state, action) => {
    state.professor = action.payload
  })
  .addCase(A.answerRatingQuestion, (state, action) => {
    state.alumniAnswers[action.payload.questionId] = action.payload.value
  })
  .addCase(A.updateComment, (state, action) => {
    state.alumniComments = action.payload
  })
  .addCase(A.toggleProfessorTrait, (state, action) => {
    const traitsSet = new Set(state.alumniProfessorTraits)

    if (traitsSet.has(action.payload)) {
      traitsSet.delete(action.payload)
    } else {
      traitsSet.add(action.payload)
    }

    state.alumniProfessorTraits = Array.from(traitsSet)
  })
)

export default reducer
export type { State }
