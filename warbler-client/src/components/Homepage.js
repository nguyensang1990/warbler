import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className='home-hero' >
    <h1>What's Happening?</h1>
    <h2>New to Warble?</h2>
    <Link to='signup' className='btn btn-primary' >
      Sign Up
    </Link>
  </div>
);

export default Homepage;
