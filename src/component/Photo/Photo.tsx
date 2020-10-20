import React, { FC, useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Layout } from '..';
import { listenToRandomPhoto, Photo as Photos } from '../../api';
import './style.css';

const Photo: FC = () => {
  const [images = [], setImages] = useState<Photos[]>();

  const [max = 9, setMax] = useState<number>();

  const [loading = false, setLoading] = useState<boolean>();

  const [error, setError] = useState<string>();

  const getRandomPhoto = () => {
    setLoading(true);
    console.log('yes m,an');
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

  // useEffect(() => {
  //   getRandomPhoto();
  //   //eslint-disable-next-line
  // }, []);

  const infiniteScroll = useInfiniteScroll<HTMLDivElement>({
    loading,
    onLoadMore: getRandomPhoto,
    scrollContainer: 'window',
    hasNextPage: false
  });

  console.log(images);

  return (
    <Layout>
      <div className='gallery'>
        {images.length > 0 && (
          <div className='container'>
            <div className='row' ref={infiniteScroll}>
              {images.map((item, index) => (
                <div className='col-md-4' key={index}>
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
