import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner')
  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App