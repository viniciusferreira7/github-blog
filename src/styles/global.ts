import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: ${(props) => props.theme.colors['base-border']};
  border-radius: 5px;
}
::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 5px;
}

:focus{
  outline: 0;
  box-sizing: 0 0 0 2px ${(props) => props.theme.colors['blue-300']};
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
