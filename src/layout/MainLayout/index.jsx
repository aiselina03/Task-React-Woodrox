import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function MainLayout() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout