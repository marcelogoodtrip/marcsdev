import React from 'react'
import Photo from '../../../assets/IMG_20230224_133758_055.jpg'
import './sidebar.sass'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="photo-container">
        <img src={Photo} className="photo" alt="" />
      </div>
      <div className="about-container">
        <p>Marcelo Moura de Lima, 24</p>
        <p>Desenvolvedor Jr. - Centro Universitário do Vale do Jaguaribe.</p>
      </div>
      <div className="formations-container">
        <h3>Formações</h3>
        <div className="item">
          <p>Bacharelando em Ciência da Computação (7° Semestre)</p>
          <small>- Instituto Federal do Ceará -</small>
        </div>
        <div className="item">
          <p>Formação: JavaScript para Back-end</p>
          <small>- Alura -</small>
        </div>
        <div className="item">
          <p>Formação: C# e Orientações a Objetos</p>
          <small>- Alura -</small>
        </div>
        <div className="item">
          <p>Bootcamp: JavaScript</p>
          <small>- Digital Innovation One -</small>
        </div>
      </div>
    </div>
  )
}

export default SideBar