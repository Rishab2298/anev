import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'


const AppLayout = () => {
  return (
    <>
    <div className="max-w-full relative  min-h-screen bg-black flex flex-col ">
    <Header /> 
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default AppLayout