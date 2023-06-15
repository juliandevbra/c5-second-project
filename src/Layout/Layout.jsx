import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <h2>Esto es el Layout</h2>
        <Outlet/>
    </div>
  )
}

export default Layout