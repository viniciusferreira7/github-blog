import styled from 'styled-components'

export const PublicationContentContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2.5rem 2rem;

  line-height: 25.6px;

  p {
    margin-bottom: 1.5rem;
  }
`

export const Code = styled.div`
  width: 100%;
  min-height: 6.875rem;
  padding: 1rem;
  border-radius: 2px;

  background: ${(props) => props.theme.colors['base-post']};
`
