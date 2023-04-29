import React from 'react';
import Footer from './Navbar/Footer/Footer';
import NoteBook from './Notes/NoteBook';
import Navbar from './Navbar/NavBar';
import TodoList from './Todo/List';

const navItems = [
  {
    key: 117,
    class: 'nav-link',
    ref: '/logout',
    text: 'Log Out'
  }
]

export default function Home(props) {
  return (
    <div className='page'>
      <Navbar title='Hi User!' Links={navItems}/>
      <div className='row'>
        <div className='col-auto'>
          <TodoList items={[]} />
        </div>
        <div className='col'>
          <div className='row'>
            <NoteBook notes={[]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
