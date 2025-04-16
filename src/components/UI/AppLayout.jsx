import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default AppLayout