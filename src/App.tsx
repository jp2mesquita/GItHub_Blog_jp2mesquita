import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/intex";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { PostProvider } from "./contexts/PostsContext";
export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
      </PostProvider>

    </ThemeProvider>
  )
}

