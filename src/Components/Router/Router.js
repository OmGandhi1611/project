import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import GoogleMaps from '../maps/GoogleMaps'
import Signup from '../Signup/Signup'

export const Router = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/maps" element={<GoogleMaps />} />           
        </Routes>
    </div>
  )
}
