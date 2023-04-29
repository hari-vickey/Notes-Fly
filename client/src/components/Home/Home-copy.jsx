import React from 'react';
import Note from '../Notes/Note';
import Item from '../Todo/Item';
import Populate from './populate';
import Navbar from '../Navbar/NavBar';
import Description from './Description';
import Footer from '../Navbar/Footer/Footer';

const navItems = [
  {
    key: 115,
    class: 'nav-link',
    ref: '/sign-in',
    text: 'Sign In'
  },
  {
    key: 116,
    class: 'sign-up nav-link',
    ref: '/sign-up',
    text: 'Sign Up'
  }
]

export default function Home(props) {
  function nothing(id) {
    console.log(id);
  }
  return (
    <div className='page'>
      <Navbar title='Notes Fly' Links={navItems}/>
      <div className='row'>
        <div className='col-auto'>
          <div/>
          <Description  class='description' content='Progressing with this app.'/>
          <div className='todo-list'>
            <div className='heading'><h1>Check List</h1></div>
            <div className='form'>
              <input type='text' placeholder='Add Item' autoFocus/>
              <div className='btn btn-warning'><span>Add</span></div>
            </div>
            <div className='list'>
              {Populate.list.map((items, index) => (
                <Item key={items.key} text={items.item} checked={items.checked} onChecked={nothing} />
              ))}
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <Description class='description' content='Progressing with this App'/>
          </div>
          <div className='row'>
            <div className='note-book'>
              <div className="note form spacing">
                <input name="title" type="text" placeholder="Add title"/>
                <textarea name="content" type="text" placeholder="Add content.."/>
                <button type="button" className="note-button"><p>+</p>
                </button>
              </div>
              {Populate.notes.map((note) =>
                <Note key={note.key} heading={note.title} content={note.content} onRemove={nothing} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}