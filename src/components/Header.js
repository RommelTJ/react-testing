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
      <div>
        <Link to="/">Home</Link>
        <Link to="/post">Post a Comment</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }

}

export default Header;
