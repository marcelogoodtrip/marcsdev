import React from 'react'
import './navbar.sass'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Quem Sou</a>
        </li>
        <li>
          <a href="#">O Que Faço</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Fale Comigo</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar