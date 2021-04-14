import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfessors } from './actions';
import { professorListHookSelector } from './selectors';

function useProfessorList(subjectId: string) {
  const dispatch = useDispatch()
  const [loading, professors, error] =  useSelector(professorListHookSelector)

  useEffect(() => {
    dispatch(fetchProfessors({subjectId}))
  }, [dispatch, subjectId])

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return [loading, professors] as [typeof loading, typeof professors]
}

export { useProfessorList }
