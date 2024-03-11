import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutaus from '../Body/AboutUs'
import Home from '../Body/Home'
import Main from '../Body/Main'
import Services from '../Body/Services'

export default function AllRoutes() {
  return (
   <Routes>
    <Route path='/'  element={<Main/>}/>
    <Route path='/whyus'  element={<Aboutaus/>}/>
    <Route path='/Services'  element={<Services/>}/>
   </Routes>
  )
}
