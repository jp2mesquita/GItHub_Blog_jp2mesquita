import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/intex";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>

    </ThemeProvider>
  )
}

