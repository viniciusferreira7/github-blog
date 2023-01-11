import styled from 'styled-components'
import { DefaultBox } from '../../../../layouts/DefaultLayout/styles'

export const PublicationHeaderContainer = styled(DefaultBox)`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      text-decoration: none;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors['blue-300']};
      font-size: ${(props) => props.theme.fontSizes.xs};
      font-weight: 700;

      margin-bottom: 1.25rem;
      border-bottom: 1px solid transparent;

      &:hover {
        transition: all 0.3s ease-in-out;
        border-color: ${(props) => props.theme.colors['blue-300']};
      }
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    color: ${(props) => props.theme.colors['base-title']};

    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    gap: 2rem;
    align-items: center;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        color: ${(props) => props.theme.colors['base-label']};
        font-size: ${(props) => props.theme.fontSizes.lg};
      }

      span {
        color: ${(props) => props.theme.colors['base-span']};
        font-size: ${(props) => props.theme.fontSizes.md};
      }
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.fontSizes.lg};
    }

    footer {
      gap: 0.35rem;
      align-items: flex-start;
      flex-direction: column;

      svg {
        font-size: ${(props) => props.theme.fontSizes.sm};
      }

      span {
        font-size: ${(props) => props.theme.fontSizes.xs};
      }
    }
  }
`
