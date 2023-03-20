import React from 'react'
import Slogan from '../../assets/slogan.png'
import SocialNetworks from '../../components/HomeComponents/SocialNetworks/SocialNetworks'
import GradientBg from '../../components/HomeComponents/GradientBg/GradientBg'
import SmokeEffect from '../../components/HomeComponents/SmokeEffect/SmokeEffect'
import Navbar from '../../components/HomeComponents/Navbar/Navbar'
import Logo from '../../assets/marcsdev-logo.png'

import './home.sass'

const Home = () => {
  return (
    <div>
      <GradientBg />
      <SmokeEffect />
      <section className='home-container'>
        <Navbar />
        <div className="slogan-container">
          <img src={Logo} className='slogan' alt="Logo e Slogan" />
          <img src={Slogan} className='slogan' alt="Logo e Slogan" />
        </div>
        <SocialNetworks />
      </section>
    </div>
  )
}

export default Home