import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing:antialiased;
  background: ${(props) => props.theme.colors['base-background']};
  color:${(props) => props.theme.colors['base-text']};
}

body, button, input {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
}
`
