import './App.css'
import EditData from './Components/EditData'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Udata from './Components/Udata'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='' element={<Home />}></Route>
            <Route path='/adddata' element={<Udata />}></Route>
            <Route path='/editdata/:id' element={<EditData />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
