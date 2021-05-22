import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import HomeStream from './pages/HomeStream';
import Login from './pages/login';
import Register from './pages/Register';
import RentalDetail from './pages/RentalDetail';

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/">
          <HomeStream />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/rentals/:id">
          <RentalDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes; 