import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyKitchen from "./pages/MyKitchen"
import RecipeDetails from "./pages/RecipeDetails"
import Profile from "./pages/Profile"
import Page404 from "./pages/Page404"
import { Toaster } from "sonner"

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<Recipes />} />
        <Route path="/my-kitchen" element={<MyKitchen />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
