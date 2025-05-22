import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Allrooms from './pages/Allrooms.jsx'
import RoomDetails from './pages/RoomDetails.jsx'
import MyBookings from './pages/MyBookings.jsx'
import HotelRegister from './components/HotelRegister.jsx'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner')
  return (
    <>
      {!isOwnerPath && <Navbar />}
      {/* {false && <HotelRegister/>} */}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Allrooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App