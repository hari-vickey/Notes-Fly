import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  function logout() {
    window.open('http://localhost:8000/api/auth/logout', '_self');
  }
  return (
    <nav className='navbar navbar-expand my-navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand active' to='/'>Notes Fly</Link>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'><div className='nav-link user-name'>Hi {props.username}!</div></li>
          <li className='nav-item' onClick={logout}>
            <span className='nav-btn nav-link'>Log Out</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
