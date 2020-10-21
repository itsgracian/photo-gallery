import React, { FC, useState, useEffect } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Layout } from '..';
import { listenToRandomPhoto, Photo as Photos } from '../../api';
import { PhotoDetail } from '.';
import './style.css';

const Photo: FC = () => {
  const [images = [], setImages] = useState<Photos[]>();

  const [loading = false, setLoading] = useState<boolean>();

  const [error, setError] = useState<string>();

  const [imageDetail, setImageDetail] = useState<Photos>();

  const max = 9;

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(undefined);
      }, 5000);
    }
  });

  const getRandomPhoto = () => {
    setLoading(true);
    listenToRandomPhoto({
      max,
      callback: (error, response) => {
        setLoading(false);
        if (error) {
          setError(error);
        }
        if (response) {
          setImages(images.concat(response));
        }
      },
    });
  };

  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading,
    hasNextPage: true,
    onLoadMore: getRandomPhoto,
  });

  const closeImage = () => {
    setImageDetail(undefined);
  };

  return (
    <Layout>
      {imageDetail && <PhotoDetail photo={imageDetail} close={closeImage} />}
      <div className='gallery' ref={infiniteRef}>
        {error && <div className='error'>{error}</div>}
        {images.length > 0 && (
          <div className='container'>
            <div className='row'>
              {images.map((item, index) => (
                <div
                  className='col-md-4'
                  key={index}
                  onClick={() => setImageDetail(item)}
                >
                  <div className='photo'>
                    <img src={item.urls.regular} alt='' />
                  </div>
                </div>
              ))}

              {loading && <h1>loading ...</h1>}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Photo;
