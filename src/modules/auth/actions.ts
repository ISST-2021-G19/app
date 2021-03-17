import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Profile } from 'edoc/lib/UniApi'

interface LoginThunkArg {
  email: string
  password: string
}

const login = createAsyncThunk<Profile, LoginThunkArg>('auth/login', async ({ email, password }) => {
  const profile = await uniApi.login(email, password)
  return profile
})

export { login }
