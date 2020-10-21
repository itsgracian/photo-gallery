import React, { FC } from 'react';
import { Photo } from '../../../api';
import './style.css';

interface Props {
  photo: Photo;
  close: () => void;
}
const PhotoDetail: FC<Props> = (props) => {
  const { photo, close } = props;

  if (!photo) {
    return null;
  }

  return (
    <div className='photoDetail'>
      <div className='container'>
        <div className='row'>
          <div className='detail'>
            <div className='close' role='button' onClick={() => close()}>
              <span className='ion-ios-close-empty'></span>
              <div>close</div>
            </div>
            <div className='image'>
              <img src={photo.urls.regular} alt='' />
            </div>
            <div className='imageInfo'>
              <div className='user'>
                <div>by</div>
                <div className='name'>{photo.user.name}</div>
              </div>
              <div className='download'>
                <button>
                  <span
                    className='ion-ios-heart-outline'
                    style={{ color: 'red' }}
                  ></span>
                  <div>{photo.user.total_likes} likes</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
