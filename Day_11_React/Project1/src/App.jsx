import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import NavBar from './Components/NavBar'
import Home from "./Components/Home"
import About from "./Components/About"
import ContactUs from "./Components/ContactUs"
import LayOut from "./Components/lAYoUT.JSX"
// import AllProducts from './Components/AllProducts'
import Product from "./Components/Product"

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/:category/:id" element={<Product />} />
            {/* <Route path="/allproducts" element={<AllProducts />}></Route> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
