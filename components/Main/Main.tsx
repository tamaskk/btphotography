import React from 'react'
import Header from '../Header/Header'
import About from '../Aboutme/Aboutme'
import Grid from '../Grid/Grid'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header />
        <About />
        <Grid />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main