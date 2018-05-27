import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from '../components/MessageTimeline';

const Homepage = ({currentUser}) => {
  if (!currentUser.isAuthenticated) {
    return (<div className='home-hero' >
      <h1>What's Happening?</h1>
      <h2>New to Warble?</h2>
      <Link to='signup' className='btn btn-primary' >
      Sign Up
      </Link>
    </div>
    );
  }
  return <MessageTimeline {...currentUser} />;
};

export default Homepage;
