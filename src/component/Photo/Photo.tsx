import React, { FC, useEffect, useState } from 'react';
import { Layout } from '..';
import { listenToRandomPhoto, Photo as Photos } from '../../api';
import './style.css';

const Photo: FC = () => {
  const [images = [], setImages] = useState<Photos[]>();

  const [max = 9, setMax] = useState<number>();

  const [loading, setLoading] = useState<boolean>();

  const [error, setError] = useState<string>();

  const getRandomPhoto = () => {
    setLoading(true);
    return listenToRandomPhoto({
      max,
      callback: (error, response) => {
        setLoading(false);
        if (error) {
          setError(error);
        }
        if (response) {
          setImages(response);
        }
      },
    });
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  console.log(images);
  console.log('error', error);

  return (
    <Layout>
      <div className='gallery'>
        <div className='container'>
          <div className='row'>
            {images &&
              images.length > 0 &&
              images.map((item, index) => (
                <div className='col-md-4' key={index}>
                  <div className='photo'>
                    <img
                      src={item.urls.regular}
                      alt=''
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Photo;
