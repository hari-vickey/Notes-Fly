import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {
  return (
    <li className='nav-item'><Link className={props.styles} to={props.link}>{props.label}</Link></li>
  );
}