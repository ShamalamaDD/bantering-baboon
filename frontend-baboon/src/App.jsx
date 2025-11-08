import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Analysis from './pages/Analysis'
import About from './pages/About'
import { MotionConfig } from 'framer-motion'

function Navbar(){
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold">🐵</div>
        <div className="text-white font-semibold">Bantering Baboon</div>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/analysis" className="text-gray-300 hover:text-white">Analysis</Link>
        <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
      </div>
    </nav>
  )
}

export default function App(){
  return (
    <MotionConfig>
      <div className="min-h-screen text-white">
        <Navbar />
        <main className="px-6 pb-12">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/analysis" element={<Analysis/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
      </div>
    </MotionConfig>
  )
}