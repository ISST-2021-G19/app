import React, { ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { useAuthenticatedUser } from '../hooks'
import { isInitialLoadDoneSelector } from '../selectors'
import LoginScreen from './LoginScreen'

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider(props: AuthProviderProps) {
  const user = useAuthenticatedUser()
  const initialLoadDone = useSelector(isInitialLoadDoneSelector)

  if (!initialLoadDone) {
    return <ActivityIndicator />
  }

  if (!user) {
    return <LoginScreen />
  }

  return <>{props.children}</>
}

export { AuthProvider }
export type { AuthProviderProps }