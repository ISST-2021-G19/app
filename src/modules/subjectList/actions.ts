import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Course } from 'edoc/lib/UniAPI'

const fetchCourses = createAsyncThunk<Course[]>(
  'subjectList/fetchCourses',
  async () => {
    const courses = await uniApi.enrolledCourses()
    return courses
  },
)

export { fetchCourses }
