import styled from 'styled-components'

interface HeaderContainerProps {
  backgroundImage: string[]
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 296px;

  background-color: ${(props) => props.theme.colors['base-profile']};

  div {
    width: 25.56rem;
    height: 11.75rem;
    background-size: contain;
    z-index: 1;
  }

  div:first-of-type {
    background-image: url(${(props) => props.backgroundImage[0]});
  }

  div:last-of-type {
    background-image: url(${(props) => props.backgroundImage[1]});
  }

  img {
    width: 9.25rem;
    height: 6.125rem;
    position: relative;
    top: -35px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;

    div {
      height: 8rem;
    }

    img {
      width: 8.5rem;
      height: 5.8rem;
    }
  }
`
