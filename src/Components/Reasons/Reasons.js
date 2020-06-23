import React from 'react';
import './Reasons.css';

//images
import Banking from '../design/icon-online.svg';
import Budgeting from '../design/icon-budgeting.svg';
import Onboarding from '../design/icon-onboarding.svg';
import API from '../design/icon-api.svg';

export default function Reasons() {
  return (
    <div className='Reasons'>
      <div className='intro'>
        <h1>Why choose Easybank?</h1>
        <br />
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className='reasonswhy'>
        <div>
          <img src={Banking} alt='Banking' />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to track your
            finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src={Budgeting} alt='Budgeting' />
          <h3>Simple Budgeting</h3>
          <p>
            Our modern web and mobile applications allow you to track your
            finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src={Onboarding} alt='Onboarding' />
          <h3>Fast Onboarding</h3>
          <p>
            Our modern web and mobile applications allow you to track your
            finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src={API} alt='API' />
          <h3>Open API</h3>
          <p>
            Our modern web and mobile applications allow you to track your
            finances wherever you are in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
