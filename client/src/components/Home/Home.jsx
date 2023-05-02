import React from 'react';
import { useNavigate } from 'react-router-dom';
import Description from './Description';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <img src='/images/notes-fly.png' alt='logo' width='150px' />
      <Description />
      <div className='btn btn-lg auth-btn' onClick={
        () => navigate('/login')} >
          Login with <i className='fab fa-google'></i>
      </div>
    </div>
  );
}
