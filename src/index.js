import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Root from './Root';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from "./components/auth/SignUp";
import Feature from './components/Feature';
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signout" exact component={SignOut} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root'));
