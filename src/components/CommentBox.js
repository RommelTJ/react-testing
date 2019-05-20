import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  state = { comment: '' };

  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log("I need to leave!");
    }
  }

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
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
