import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeDataProvider from './context/RecipeDataProvider.tsx'
import { ThemeProvider } from './context/ThemeContextProvider.tsx'
import { AuthProvider } from './context/authContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <RecipeDataProvider>
          <App />
        </RecipeDataProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter >
)
