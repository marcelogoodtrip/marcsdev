import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", link: '#', icon: <FaLinkedinIn /> },
  { name: "github", link: '#', icon: <FaGithub /> },
  { name: "instagram", link: '#', icon: <FaInstagram /> },
  { name: "whatsapp", link: '#', icon: <FaWhatsapp /> }
];

const SocialNetworks = () => {
  return (
    <div className='social-networks'>
      { socialNetworks.map((network) => (
        <a href={ network.link } className='social-btn' id={ network.name } key={ network.name }>
          { network.icon }
        </a>
      )) }
    </div>
  )
}

export default SocialNetworks