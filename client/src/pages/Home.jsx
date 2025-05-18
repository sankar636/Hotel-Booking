import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedDestination from '../components/FeaturedDestination.jsx'
import ExclusiveOffer from '../components/ExclusiveOffer.jsx'
import Testimonials from '../components/Testimonials.jsx'
import NewsLetter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'



const Home = () => {
  return (
   <>
    <Hero/>
    <FeaturedDestination/>
    <ExclusiveOffer/>
    <Testimonials/>
    <NewsLetter/>
    <Footer/>
   </>
  )
}

export default Home