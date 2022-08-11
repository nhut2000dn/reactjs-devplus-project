import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Preloader from '../../components/Preloader'
import ScrollUp from '../../components/ScrollUp'

const HomePage = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <ScrollUp/>
    </div>
  )
}

export default HomePage