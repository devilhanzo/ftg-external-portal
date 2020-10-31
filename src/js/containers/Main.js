import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { HomeSweetHome, Login, Register, Password, Oauth2Authorize, Error, NotFound } from '../components';
import HomeSweetHome  from '../components/HomeSweetHome';
import Login  from '../components/Login';
import Status  from '../components/Status';
import Logout  from '../components/Logout';
import Portal  from '../components/Portal';
import Error  from '../components/Error';
import NotFound  from '../components/NotFound';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  // <main>
  <Switch>
    <Route exact path="/" component={HomeSweetHome} />
    <Route path="/login" component={Login} />
    <Route path="/status" component={Status} />
    <Route path="/logout" component={Logout} />
    <Route path="/portal" component={Portal} />
    <Route path="/error" component={Error} />
    <Route component={NotFound} />
  </Switch>
  // </main>
);

export default Main;