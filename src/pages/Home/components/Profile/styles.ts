import styled from 'styled-components'
import { DefaultBox } from '../../../../layouts/DefaultLayout/styles'

export const ProfileContainer = styled(DefaultBox)`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
      height: 100%;
    }
  }
`
export const ProfileContent = styled.div`
  width: 100%;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: 700;
    color: ${(props) => props.theme.colors['blue-300']};

    span {
      border-bottom: 1px solid transparent;
    }

    &:hover {
      span {
        transition: all 0.3s ease-in-out;
        border-bottom: 1px solid ${(props) => props.theme.colors['blue-300']};
      }
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    a {
      font-size: ${(props) => props.theme.fontSizes.xs};
    }
  }
`
export const ProfileMain = styled.main`
  margin: 0.5rem 0 1.5rem 0;

  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors['base-text']};
  line-height: 25.6px;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: ${(props) => props.theme.fontSizes.md};

    svg {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  @media screen and (max-width: 768px) {
    div {
      font-size: ${(props) => props.theme.fontSizes.xs};
    }
  }
`
