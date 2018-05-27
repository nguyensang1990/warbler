import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside.js';

const MessageTimeline = ({ username, userImage }) => {
  return (
    <div className='row'>
      <UserAside username={username} userImage={userImage} />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
