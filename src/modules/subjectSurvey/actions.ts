import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Professor }  from 'edoc/lib/UniApi'

interface FetchProfessorsParams{ 
  subjectId: string 
} 
const fetchProfessors = createAsyncThunk<Professor[],FetchProfessorsParams>(
  'subjecSurvey/fetchProfessors',
  async (params) => {
    const professors = await uniApi.enrolledProfessors(params)
    return professors
  },
)

export {  fetchProfessors }
