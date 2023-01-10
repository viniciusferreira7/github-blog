import styled from 'styled-components'

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;

  max-width: 26rem;
  width: 100%;
  padding: 2rem;

  border-radius: 10px;
  border: 2px solid transparent;
  background: ${(props) => props.theme.colors['base-post']};

  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    border-color: ${(props) => props.theme.colors['base-label']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  margin-bottom: 1.25rem;

  h1 {
    max-width: 16.68rem;
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-title']};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors['base-span']};
  }
`

export const PostContent = styled.main`
  height: 7rem;
  overflow: hidden;
`