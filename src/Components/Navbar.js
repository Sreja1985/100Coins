import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Navbar() {
    
  return (
    <nav className='navbar'>
      <Link className='navbar__item' to="/">
          Home
      </Link>
      
    </nav>
  )
}

export default Navbar
