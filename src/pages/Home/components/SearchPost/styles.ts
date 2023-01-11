import styled from 'styled-components'

export const SearchPostsContainer = styled.form`
  display: grid;
  grid-template-areas:
    'h2 span'
    ' input input';
  justify-content: space-between;
  gap: 0.75rem;

  width: 100%;
  margin-top: 4.5rem;

  h2 {
    grid-area: h2;

    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  span {
    grid-area: span;

    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors['base-span']};
  }

  input {
    grid-area: input;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors['base-border']};
    outline: none;

    background-color: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fontSizes.md};

    ::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }

    &:focus {
      transition: all 0.4s ease-in-out;
      color: ${(props) => props.theme.colors['base-text']};
      border-color: ${(props) => props.theme.colors['blue-300']};

      ::placeholder {
        color: ${(props) => props.theme.colors['base-text']};
      }
    }
  }
`
