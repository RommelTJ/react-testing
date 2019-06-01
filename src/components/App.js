import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from "../actions";
import Header from "./Header";

class App extends Component {

  render() {
    return (
      <div>
        <Header auth={this.props.auth} changeAuth={this.props.changeAuth} />
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
