import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar';
import ViewPaste from './Components/ViewPaste';
import Home from './Components/Home';
import Paste from './Components/Paste';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <NavBar />
        <Home />
      </div>,
    },
    {
      path: '/pastes',
      element:
        <div>
          <NavBar />
          <Paste />
        </div>
      ,
    },
    {
      path: '/pastes/:id',
      element:
        <div>
          <NavBar />
          <ViewPaste />
        </div>
      ,
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
