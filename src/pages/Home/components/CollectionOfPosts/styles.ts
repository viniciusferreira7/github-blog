import styled from 'styled-components'

export const CollectionOfPostsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-top: 3rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
