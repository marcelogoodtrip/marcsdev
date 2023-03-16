import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin", link: '#', icon: <FaLinkedinIn /> },
  { name: "github", link: '#', icon: <FaGithub /> },
  { name: "instagram", link: '#', icon: <FaInstagram /> },
  { name: "whatsapp", link: '#', icon: <FaWhatsapp /> }
];

const SocialNetworks = () => {

  const [selectedIcon, setSelectedIcon] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    const handleMouseEnter = (e) => {
      setSelectedIcon(e.currentTarget.dataset.icon);
      setToggle(true);
    }
    const handleMouseLeave = () => {
      setSelectedIcon('');
      setToggle(false);
    }

    icons.forEach(icon => {
      icon.addEventListener('mouseenter', handleMouseEnter);
      icon.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      icons.forEach(icon => {
        icon.removeEventListener('mouseenter', handleMouseEnter);
        icon.removeEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  return (
    <div className='social-networks'>
      { socialNetworks.map((network) => (
        <div className={`icon ${network.name}`} key={network.name} data-icon={network.name}>
          <a href={network.link} className='link' id={network.name}>
            {network.icon}
            {toggle && selectedIcon === network.name && (
              <span className={`name ${selectedIcon === network.name ? 'active' : ''}`}>
                {network.name}
              </span>
            )}
          </a>
        </div>
      )) }
    </div>
  )
}

export default SocialNetworks;