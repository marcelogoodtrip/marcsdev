import React from 'react'
import Navbar from '../../components/HomeComponents/Navbar/Navbar'
import Slogan from '../../assets/marcsdev-logo.png'
import './home.sass'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="slogan-container">
        <img src={Slogan} className='slogan' alt="Logo e Slogan" />
      </div>
    </div>
  )
}

export default Home