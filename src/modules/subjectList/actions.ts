import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Course } from 'edoc/lib/UniApi'

const fetchCourses = createAsyncThunk<Course[]>(
  'subjectList/fetchCourses',
  async () => {
    const courses = await uniApi.enrolledCourses()
    return courses
  },
)

export { fetchCourses }
