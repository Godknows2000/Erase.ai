import React from 'react'
import Header from '../components/Header/Header'
import Steps from '../components/Steps/Steps'
import BgSlider from '../components/BgSlider/BgSlider'
import Testimonials from '../components/Testimonials/Testimonials'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <HeroSection />
    </div>
  )
}

export default Home