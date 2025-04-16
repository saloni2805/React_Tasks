import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import NoPage from "./pages/nopage/NoPage"
import Home from "./pages/home/home"
import MyState from "./context/data/MyState"
import AllProducts from "./pages/allproducts/AllProducts"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import AddProduct from "./pages/admin/page/AddProduct"
import UpdateProduct from "./pages/admin/page/UpdateProduct"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App

// user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user")
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

// admin
export const ProtectedRouteForAdmin = ({ children }) => {
  // convert it into object to access value
  const admin = JSON.parse(localStorage.getItem("user"))
  // console.log(admin.user.email)
  if (!admin.user.email === "s@gmail.com") {
    return <Navigate to="/login" />
  }
  return children
}
