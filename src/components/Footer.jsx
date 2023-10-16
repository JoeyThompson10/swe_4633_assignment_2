import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerfooter.css';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to="/">Enter Grade</Link>|
        <Link to="/viewgrades">View Grades</Link>|  
        <Link to="/about">About</Link>
      </nav>
      <p>© 2023 Joey Thompson</p>
    </footer>
  );
}

export default Footer;