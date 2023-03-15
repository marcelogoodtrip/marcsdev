import React from 'react'
import Slogan from '../../assets/marcsdev-logo.png'
import './home.sass'

const Home = () => {
  return (
    <div className="slogan-container">
      <img src={Slogan} className='slogan' alt="Logo e Slogan" />
    </div>
  )
}

export default Home