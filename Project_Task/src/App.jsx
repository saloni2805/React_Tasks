import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { MyProvider } from "./context/MyProvider"
import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <>
      <MyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </MyProvider>
    </>
  )
}

export default App
