import React from 'react';
import NoteBook from './Notes/NoteBook';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TodoList from './Todo/List';

function App() {
  return (
    <div className='page'>
      <Header />
      <div className='row'>
        <div className='col-auto'><TodoList /></div>
        <div className='col'>
          <div className='row'>
            <NoteBook />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;