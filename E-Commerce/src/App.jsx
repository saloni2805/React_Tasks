import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import NoPage from "./pages/nopage/NoPage"
import Home from "./pages/home/home"
import MyState from "./context/data/myState"
import AllProducts from "./pages/allproducts/AllProducts"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
