import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostProvider } from './context/PostContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <PostProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </PostProvider>
  )
}
