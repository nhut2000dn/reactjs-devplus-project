import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Preloader from '../../components/Preloader'

const HomePage = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
    </div>
  )
}

export default HomePage