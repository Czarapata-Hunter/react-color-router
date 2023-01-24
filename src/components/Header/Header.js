import React from 'react';
import './Header.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import RGBDisplay from '../RGBDisplay/RGBDisplay.js';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <p>
          <NavLink to="/">Color1</NavLink>
        </p>
        <p>
          <NavLink to="/rgb/111/222/111">Color2</NavLink>
        </p>
        <p>
          <NavLink to="/rgb/222/111/222">Color3</NavLink>
        </p>
      </nav>
      <>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/rgb/:redColor/:greenColor/:blueColor" component={RGBDisplay} />
        </Switch>
      </>
    </div>
  );
}
