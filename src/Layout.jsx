import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import classes from './Layout.module.css'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header />
      <div className={classes.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout