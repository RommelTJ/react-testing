import React, {Component} from 'react';

class CommentBox extends Component {

  state = { comment: '' };

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  };

  render() {
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={(e) => this.handleChange(e)}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
