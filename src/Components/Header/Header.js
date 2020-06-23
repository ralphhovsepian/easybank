import React from 'react';
import './Header.css';

//images
import desktopBg from '../design/bgintrodesktop.svg';
import phones from '../design/phones.png';

export default function Header() {
  return (
    <div className='Header'>
      <div className='left'>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <button>Request Invite</button>
      </div>
      <div className='right'>
        <img src={phones} alt='phones' />
      </div>
    </div>
  );
}
