import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RGBDisplay from '../RGBDisplay/RGBDisplay.js';
import './ColorSwitch.css';

export default function ColorSwitch() {
  return (
    <div>
      <>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/rgb/:redColor/:greenColor/:blueColor" component={RGBDisplay} />
        </Switch>
      </>
    </div>
  );
}
