import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Navbar from './components/navbar/Navbar'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  )
}