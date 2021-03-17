import React from 'react'
import { ImageProps } from 'react-native'
import { useAuthenticatedUser } from '../hooks'
import * as S from './AuthenticatedUserAvatar.styles'

interface AuthenticatedUserAvatarProps extends ImageProps {
  className?: string
}

function AuthenticatedUserAvatar(props: AuthenticatedUserAvatarProps) {
  const user = useAuthenticatedUser()
  return (
    <S.Avatar {...props} source={props.source ?? { uri: user?.avatar ?? undefined}} />
)
}

export default AuthenticatedUserAvatar
export { AuthenticatedUserAvatar }
export type { AuthenticatedUserAvatarProps }