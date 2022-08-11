import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Testimonial from '../../components/Testimonial'
import Preloader from '../../components/Preloader'
import ScrollUp from '../../components/ScrollUp'

const HomePage = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Testimonial/>
      <ScrollUp/>
    </div>
  )
}

export default HomePage