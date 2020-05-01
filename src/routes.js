import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Professional from './pages/Professional';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/professional" exact component={Professional} />
  </Switch>
);

export default Routes;
