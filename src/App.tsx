import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
