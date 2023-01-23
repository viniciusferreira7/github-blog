import styled from 'styled-components'
import { DefaultBox } from '../../../../layouts/DefaultLayout/styles'

export const LoadingPublicationContainer = styled.main``

export const LoadingPublicationHeader = styled(DefaultBox)`
  height: 11rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    width: 100%;
    height: 1.93rem;
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    gap: 2rem;

    max-width: 24.4375rem;
    height: 1.625rem;

    div {
      max-width: 6.93rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    footer {
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`

export const LoadingPublicationContent = styled.section`
  width: 100%;

  width: 100%;
  padding: 2.5rem 2rem;
`
