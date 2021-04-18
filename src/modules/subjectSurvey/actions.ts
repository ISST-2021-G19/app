import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, {
  Course,
  Professor,
  ProfessorTrait,
  SubjectRating,
  SurveyQuestion,
}  from 'edoc/lib/UniApi'
import type { State }  from 'edoc/store'
import { subjectSurveyFilledDataSelector } from './selectors'

interface SurveyData {
  subject: Course
  subjectRating: SubjectRating
  surveyQuestions: SurveyQuestion[]
  professors: Professor[]
  professorTraits: ProfessorTrait[]
}

const fetchSubjectSurveyData = createAsyncThunk<SurveyData, string>('subjectSurvey/fetchSubjectSurveyData', 
  async (subjectId) => {
    const subjectProm = uniApi.subject({ subjectId })
    const subjectRatingProm = uniApi.subjectRating({ subjectId })
    const surveyQuestionsProm = uniApi.surveyQuestions({ subjectId })
    const professorsProm = uniApi.professors({ subjectId })
    const professorTraitsProm = uniApi.professorTraits({ subjectId })

    return {
      subject: await subjectProm,
      subjectRating: await subjectRatingProm,
      surveyQuestions: await surveyQuestionsProm,
      professors: await professorsProm,
      professorTraits: await professorTraitsProm,
    }
  },
)

const submitSurveyData = createAsyncThunk<void>('subjectSurvey/submitSurveyData',
  async (_, { getState }) => {
    const state = getState() as State
    const surveyData = subjectSurveyFilledDataSelector(state)
    // FIXME: We will need to properly map this object to the acutal API call here
    await uniApi.submitSurvey(surveyData)
  },
)

const selectProfessor = createAction<Professor>('subjectSurvey/selectProfessor')

const answerRatingQuestion = createAction<{ questionId: string, value: number }>('subjectSurvey/answerRatingQuestion')

const toggleProfessorTrait = createAction<string>('subjectSurvey/toggleProfessorTrait')

const updateComment = createAction<string>('subjectSurvey/updateComment')

export {
  fetchSubjectSurveyData,
  selectProfessor,
  answerRatingQuestion,
  toggleProfessorTrait,
  updateComment,
  submitSurveyData,
}
