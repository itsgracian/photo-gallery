import React, { FC } from 'react';
import { Layout } from '..';
import './style.css';

const Photo: FC = () => {
  return (
    <Layout>
      <div className='gallery'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='photo'>
                <img
                  src='https://images.unsplash.com/photo-1603154888653-f42d43740a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  alt=''
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='photo'>
                <img
                  src='https://images.unsplash.com/photo-1603154888653-f42d43740a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  alt=''
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='photo'>
                <img
                  src='https://images.unsplash.com/photo-1603154888653-f42d43740a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Photo;
