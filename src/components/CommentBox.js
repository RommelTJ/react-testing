import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  state = { comment: '' };

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Call action creator and save the comment.
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={(e) => this.handleChange(e)}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
