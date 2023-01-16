import styled from 'styled-components'
import { DefaultBox } from '../../../../../../layouts/DefaultLayout/styles'

export const LoadingContainer = styled(DefaultBox)`
  display: grid;
  grid-template-areas:
    'section h1 h1 h6'
    'section p p p'
    'section div1 div2 div3';

  section {
    grid-area: section;

    max-width: 148px;
    width: 100%;
    height: 148px;
    border-radius: 8px;
  }

  h1 {
    grid-area: h1;

    max-width: 236px;
    width: 100%;
    height: 31px;
  }

  h6 {
    grid-area: h6;

    max-width: 67px;
    width: 100%;
    height: 19px;
  }

  p {
    grid-area: p;

    max-width: 612px;
    width: 100%;
    height: 52px;
  }

  div {
    max-width: 111px;
    width: 100%;
    height: 26px;

    &:first-of-type {
      grid-area: div1;
    }

    &:nth-of-type(2) {
      grid-area: div2;
    }

    &:last-of-type {
      grid-area: div3;
    }
  }
`
