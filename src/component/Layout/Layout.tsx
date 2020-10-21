import React, { FC } from 'react';
import './style.css';

const Layout: FC = (props) => {
  return (
    <div className='layoutScreen'>
      <div className='header'>
        <ul className="list">
          <li>
            <a href='https://github.com/itsgracian/' target="_blank">
              <span className='ion-social-github'></span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/itsgracian' target="_blank">
              <span className='ion-social-twitter-outline'></span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/gratien-tuyishimire-255469113/' target="_blank">
              <span className='ion-social-linkedin'></span>
            </a>
          </li>
        </ul>
      </div>
      {props.children}
      <div className='bottom'>
        <div className='logo'>
          <h3>Photo Gallery</h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
