import React from 'react';
import './Articles.css';

//images
import currency from '../design/currency.jpg';
import confetti from '../design/confetti.jpg';
import plane from '../design/plane.jpg';
import resto from '../design/resto.jpg';

export default function Articles() {
  return (
    <div className='Articles'>
      <h1>Latest Articles</h1>
      <div className='article'>
        <div className='art'>
          <img src={currency} alt='image' />
          <p>By Claire Robinson</p>
          <h3>Receive money in any currency with no fees.</h3>
          <p>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single...
          </p>
        </div>

        <div className='art'>
          <img src={resto} alt='image' />
          <p>By Wilson Hutton</p>
          <h3>Treat yourself without worrying about money.</h3>
          <p>
            Our simple budgeting feature allows you to separate out your
            spendings and set realistics limits each month. That means you...
          </p>
        </div>

        <div className='art'>
          <img src={plane} alt='image' />
          <p>By Wilson Hutton</p>
          <h3>Take your Easybank card wherever you go.</h3>
          <p>
            We want you to enjoy your travels. This is why we don't charge any
            fees on purchases while you're abroad. We'll even show you...
          </p>
        </div>

        <div className='art'>
          <img src={confetti} alt='image' />
          <p>By Claire Robinson</p>
          <h3>Our invite-only Beta accounts are now live!</h3>
          <p>
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite through the site...
          </p>
        </div>
      </div>
    </div>
  );
}
