import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { MyProvider } from "./context/MyProvider"
import Home from "./pages/home/Home"
// import Dashboard from "./pages/dashboard/Dashboard"
import Products from "./pages/dashboard/Products"
import Categories from "./pages/dashboard/Categories"
import MainContent from "./pages/dashboard/MainContent"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<MainContent />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </Router>
    </MyProvider>
  )
}

export default App
