import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {

  renderLogInButton() {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>;
    }
    return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{ this.renderLogInButton() }</li>
      </ul>
    );
  }

}

export default Header;
