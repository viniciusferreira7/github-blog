import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <SkeletonTheme baseColor="#1C2F41" highlightColor="#3A536B">
      <LoadingContainer>
        <section>
          <Skeleton width="100%" height="100%" />
        </section>
        <h1>
          <Skeleton width="100%" height="100%" />
        </h1>
        <h6>
          <Skeleton width="100%" height="100%" />
        </h6>
        <p>
          <Skeleton width="100%" height="100%" />
        </p>
        <div>
          <Skeleton width="100%" height="100%" />
        </div>
        <div>
          <Skeleton width="100%" height="100%" />
        </div>
        <div>
          <Skeleton width="100%" height="100%" />
        </div>
      </LoadingContainer>
    </SkeletonTheme>
  )
}
