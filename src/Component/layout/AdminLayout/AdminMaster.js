import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../Footer'
import AdminHeader from './AdminHeader'

export default function AdminMaster() {
  const token = sessionStorage.getItem("token")
  if(!token|| token=="null"|| token==null){
    return <Navigate to = "/login"/>
  }
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}
