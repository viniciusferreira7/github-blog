import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  LoadingPublicationContainer,
  LoadingPublicationContent,
  LoadingPublicationHeader,
} from './styles'

export function LoadingPublication() {
  return (
    <SkeletonTheme baseColor="#1C2F41" highlightColor="#3A536B">
      <LoadingPublicationContainer>
        <LoadingPublicationHeader>
          <header>
            <Skeleton width="4.18rem" height="1.18rem" />
            <Skeleton width="7.18rem" height="1.18rem" />
          </header>
          <h1>
            <Skeleton />
          </h1>
          <footer>
            <div>
              <Skeleton width="100%" />
            </div>
            <div>
              <Skeleton width="100%" />
            </div>
            <div>
              <Skeleton width="100%" />
            </div>
          </footer>
        </LoadingPublicationHeader>
        <LoadingPublicationContent>
          <div>
            <Skeleton width="100%" height="1.625rem" count={9} />
          </div>
        </LoadingPublicationContent>
      </LoadingPublicationContainer>
    </SkeletonTheme>
  )
}
