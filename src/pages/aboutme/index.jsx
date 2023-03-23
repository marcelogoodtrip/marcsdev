import React from 'react'
import SideBar from '../../components/AboutMeComponents/SideBar/SideBar'
import MainContent from '../../components/AboutMeComponents/MainContent/MainContent'
import './aboutme.sass'

const AboutMe = () => {
  return (
    <section className='aboutme-container'>
      <div className="box">
        <SideBar />
        <MainContent />
      </div>
    </section>
  )
}

export default AboutMe