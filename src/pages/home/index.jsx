import React from 'react'
import Navbar from '../../components/HomeComponents/Navbar/Navbar'
import Logo from '../../assets/marcsdev-logo.png'
import Slogan from '../../assets/slogan.png'
import SocialNetworks from '../../components/HomeComponents/SocialNetworks/SocialNetworks'
import './home.sass'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="slogan-container">
        <img src={Logo} className='slogan' alt="Logo e Slogan" />
        <img src={Slogan} className='slogan' alt="Logo e Slogan" />
      </div>
      <SocialNetworks />
    </div>
  )
}

export default Home