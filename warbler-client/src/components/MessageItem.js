import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import defaultUserImage from '../images/default-profile-image.jpg';

const MessageItem = ({date, text, username, userImage}) => {
  return (
    <div>
      <li className='list-group-item'>
        <img src={userImage || defaultUserImage} alt={username} height='100' width='100' className='timeline-image' />
        <div className='message-area' >
          <Link to='/' >@{username} &nbsp; </Link>
          <span className='text-muted'>
            <Moment className='text-muted' format='DD MM YYYY' >
              {date}
            </Moment>
          </span>
          <p>{text}</p>
        </div>
      </li>
    </div>
  );
};
export default MessageItem;
