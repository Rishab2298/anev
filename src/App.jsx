import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './appLayout'
import LandingPage from './pages/landingPage'
import Contact from './pages/contactUs'
import Work from './pages/work'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)
const router = createBrowserRouter([{
  element:<AppLayout />,
  children:[
    {
      path:'/',
      element:<LandingPage />
    },
    {
      path:'/contact-us',
      element:<Contact />
    },
    {
      path:'/work',
      element:<Work />
    }
    ,
    {
      path:'/about',
      element:<About />
    }
  ]
}])
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
