import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Profile } from 'edoc/lib/UniApi'

interface ValidateProfessorCodeThunkArg {
  code: string
}

const validateProfessorCode = createAsyncThunk<void, ValidateProfessorCodeThunkArg>(
  'survey/validateProfessorCode',
  async ({ code }) => {
    await uniApi.validateProfessorCode(code)
  },
)

export { validateProfessorCode }
