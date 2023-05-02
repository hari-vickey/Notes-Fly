import React from 'react';
import { useNavigate } from 'react-router-dom';
import Description from './Description';
import Image from '../utils/Image';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <Image src='/images/notes-fly.png' label='logo' width='150px' />
      <Description />
      <div className="btn btn-lg" onClick={() => {
        navigate('/login');
      }} >Login</div>
    </div>
  );
}
