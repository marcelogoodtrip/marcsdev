import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin", link: 'https://www.linkedin.com/in/marcelo-moura-de-lima-002081225/', icon: <FaLinkedinIn /> },
  { name: "github", link: 'https://github.com/marcelogoodtrip', icon: <FaGithub /> },
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
        setTimeout(() => {
          icon.removeEventListener('mouseenter', handleMouseEnter);
          icon.removeEventListener('mouseleave', handleMouseLeave);
        }, 2000); // 500ms de atraso antes de executar a função
      });
    }
  }, []);

  return (
    <div className='social-networks'>
      { socialNetworks.map((network) => (
          <a href={network.link} className={`btn ${network.name}`} id={network.name}>
            <div className="icon" key={network.name} data-icon={network.name}>
              {network.icon}
              {toggle && selectedIcon === network.name && (
              <span className={`name ${selectedIcon === network.name ? 'active' : ''}`}>
                {network.name}
              </span>
            )}
            </div>
          </a>
      )) }
    </div>
  )
}

export default SocialNetworks;