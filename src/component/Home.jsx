import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import ProductsList from './ProductsList'

function Home() {
  return (
    <div className='home'>
    <Hero/>
    <ProductsList/>
    <Footer/>
    </div>
  )
}

export default Home