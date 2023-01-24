import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="header">
        <div className="ash-grey">
          <p>
            <NavLink to="/rgb/178/188/170">Ash Grey</NavLink>
          </p>
        </div>
        <div className="xanadu">
          <p>
            <NavLink to="/rgb/131/142/131">Xanadu</NavLink>
          </p>
        </div>
        <div className="granite-grey">
          <p>
            <NavLink to="/rgb/108/96/97">Granite Grey</NavLink>
          </p>
        </div>
      </nav>
    </div>
  );
}
