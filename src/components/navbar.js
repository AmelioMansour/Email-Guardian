import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-no-background.png';

function Navbar() {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" style={{ width: '40%' }} />
      <ul className="flex">
        <li className="list-none mx-2">
          <Link to="/" className="text-main font-bold text-lg hover:text-blue-800 transition duration-300">Home</Link>
        </li>
        <li className="list-none mx-2">
          <Link to="/how" className="text-main font-bold text-lg hover:text-blue-800 transition duration-300">How it works?</Link>
        </li>
        <li className="list-none mx-2">
          <Link to="/results" className="text-main font-bold text-lg hover:text-blue-800 transition duration-300">Results</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
