import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RGBDisplay from '../RGBDisplay/RGBDisplay.js';
import './ColorSwitch.css';
import NotFound from '../NotFound/NotFound.js';

export default function ColorSwitch() {
  return (
    <div>
      <>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/rgb/:redColor/:greenColor/:blueColor" component={RGBDisplay} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </div>
  );
}
