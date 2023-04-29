import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

export default function Navbar(props) {
  // const location = useLocation();
  // const {data} = location.state;
  return (
    <nav className='navbar navbar-expand my-navbar'>
      <div className='container-fluid'>
        <Link className='navbar-brand active' to='/'>{props.title}</Link>
        <ul className='navbar-nav ms-auto'>
          {/* <li className='nav-item'><div className='nav-link user-name'>Hi {data}!</div></li> */}
          {props.Links.map((items) =>
            <NavItem key={items.key} styles={items.class} link={items.ref} label={items.text} />
          )}
        </ul>
      </div>
    </nav>
  );
}
