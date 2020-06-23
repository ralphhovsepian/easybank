import React from 'react';
import './Nav.css';
import logo from '../design/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const menuHandler = () => {
    const menu = document.querySelector('.mobileNav');
    menu.classList.toggle('open');

    menu.className === 'mobileNav open'
      ? (document.querySelector('.mobileMenu').style.display = 'block')
      : (document.querySelector('.mobileMenu').style.display = 'none');
  };

  return (
    <div className='Nav'>
      <nav className='desktopNav'>
        <ul>
          <div>
            <li>
              <img src={logo} alt='easybank' />
            </li>
          </div>

          <div className='pages'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </div>

          <div>
            <li>
              <button className='request'>Request Invite</button>
            </li>
          </div>
        </ul>
      </nav>

      <nav className='mobileNav'>
        <ul>
          <li>
            <img src={logo} alt='easybank' />
          </li>

          <li onClick={menuHandler} id='menu'>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>

      <div className='mobileMenu'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
}
