import React, {Component} from 'react';

class CommentBox extends Component {

  state = { comment: '' };

  render() {
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
