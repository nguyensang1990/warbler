import React from 'react';
import defaultUserImage from '../images/default-profile-image.jpg';

const UserAside = ({username, userImage}) => (
  <aside className='col-sm-2'>
    <div className='pannel pannel-default'>
      <div className='pannel-body'>
        <img
          src={userImage || defaultUserImage}
          alt={username}
          width='200'
          height='200'
          className='img-thumbnail'
        />
      </div>
    </div>
  </aside>
);

export default UserAside;
