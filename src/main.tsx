import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeDataProvider from './context/RecipeDataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RecipeDataProvider>
      <App />
    </RecipeDataProvider>
  </BrowserRouter>
)
