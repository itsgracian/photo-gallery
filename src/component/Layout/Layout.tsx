import React, { FC } from 'react';
import './style.css';

const Layout: FC = (props) => {
  return (
    <div className='layoutScreen'>
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
