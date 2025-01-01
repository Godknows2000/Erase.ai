import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImageResult from './pages/ImageResult'
import Subscription from './pages/Subscription'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  console.log("App is rendering!");
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/imageresult' element={<ImageResult/>} />
        <Route path='/subscription' element={<Subscription/>} />
      </Routes>
    </div>
  )
}

export default App