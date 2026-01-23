import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyKitchen from "./pages/MyKitchen"
import RecipeDetails from "./pages/RecipeDetails"
import Profile from "./pages/Profile"
import Page404 from "./pages/Page404"
import { Toaster } from "sonner"
import EditProfile from "./pages/EditProfile"
import SignIn from "./pages/SignIn"
import ProtectedRoute from "./components/routes/AuthProtectedRoute"

const App = () => {

  const location = useLocation();
  const hideLayout = location.pathname == "/signin";

  return (
    <div>
      <Toaster position="top-right" />
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<Recipes />} />
        <Route path="/recipe/:recipeSlug" element={<RecipeDetails />} />

        <Route path="/my-kitchen" element={
          <ProtectedRoute>
            <MyKitchen />
          </ProtectedRoute>
        } />
        <Route path="/setting" element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Page404 />} />


      </Routes>
      {!hideLayout && <Footer />}

    </div>
  )
}

export default App
