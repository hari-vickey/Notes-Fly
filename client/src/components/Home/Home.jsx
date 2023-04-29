import React from 'react';
import Description from './Description';
import Button from '../utils/Button';
import Image from '../utils/Image';

const buttons = [
  {
    key: 115,
    class: 'login',
    ref: '/login',
    text: 'Login'
  },
  {
    key: 116,
    class: '',
    ref: '/register',
    text: 'Register'
  }
]

export default function Home() {
  return (
    <div className='home'>
      {/* <Navbar title='Notes Fly' Links={navItems}/> */}
      <Image src='/images/notes-fly.png' label='logo' width='150px' />
      <Description />
      <div className=''>
        {buttons.map((items) =>
          <Button key={items.key} class={items.class} link={items.ref} label={items.text} />
        )}
      </div>
    </div>
  );
}
