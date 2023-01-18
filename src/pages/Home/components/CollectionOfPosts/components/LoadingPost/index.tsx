import Skeleton from 'react-loading-skeleton'
import { LoadingPostContainer } from './styles'

export function LoadingPost() {
  return (
    <LoadingPostContainer>
      <Skeleton baseColor="#1C2F41" highlightColor="#3A536B" height="100%" />
    </LoadingPostContainer>
  )
}
