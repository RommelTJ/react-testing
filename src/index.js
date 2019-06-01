import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Root from './Root';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from "./components/auth/SignUp";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root'));
