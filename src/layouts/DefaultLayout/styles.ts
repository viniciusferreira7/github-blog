import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`
export const DefaultBox = styled.div`
  max-width: 54rem;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  margin-top: -5.5rem;

  background: ${(props) => props.theme.colors['base-profile']};
  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  position: relative;
  z-index: 999;

  @media screen and (max-width: 768px) {
    max-width: 22rem;
    margin-top: 0;

    position: relative;

    padding: 3%;
  }
`
