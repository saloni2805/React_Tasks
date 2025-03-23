import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EmpTask from '.'
// import App from './App.jsx'
// import GridForm from './Form.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <GridForm /> */}
    <EmpTask />

  </StrictMode>,
)
