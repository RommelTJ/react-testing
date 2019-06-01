import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import Header from "./Header";

class App extends Component {

  render() {
    return (
      <div>
        <Header auth={this.props.auth} changeAuth={this.props.changeAuth} />
        {this.props.children}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
