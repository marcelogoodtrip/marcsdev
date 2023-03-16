import React from 'react'
import Navbar from '../../components/HomeComponents/Navbar/Navbar'
import Slogan from '../../assets/marcsdev-logo.png'
import SocialNetworks from '../../components/HomeComponents/SocialNetworks/SocialNetworks'
import './home.sass'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="slogan-container">
        <img src={Slogan} className='slogan' alt="Logo e Slogan" />
      </div>
      <SocialNetworks />
    </div>
  )
}

export default Home