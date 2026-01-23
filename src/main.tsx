import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeDataProvider from './context/RecipeDataProvider.tsx'
import { ThemeProvider } from './context/ThemeContextProvider.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { BookmarkProvider } from './context/BookmarkContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <BookmarkProvider>
          <RecipeDataProvider>
            <App />
          </RecipeDataProvider>
        </BookmarkProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter >
)
