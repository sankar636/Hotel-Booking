import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Allrooms from './pages/Allrooms.jsx'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner')
  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Allrooms/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App