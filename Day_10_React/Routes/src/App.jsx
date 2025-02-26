// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Services from './Services'
import PNF from './PNF'


function App() {
  {/* A <Router> for use in web browsers. Provides the cleanest URLs. */ }
  {/* Browiser is a module or package used to connect with browser urls */ }

  return (
    <>

      <Router>
        <NavBar />
        {/* is a container or wrapper to defined multiple routes */}
        {/* Is a boundary to define multiple route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />


          {/* Fallback Routing */}
          <Route path='*' element={<PNF />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
