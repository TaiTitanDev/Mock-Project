import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handlerUsernameChanger = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlerCommentChanger = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handlerTopicChanger = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>User name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlerUsernameChanger}
          />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handlerCommentChanger}
          />
        </div>

        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handlerTopicChanger}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
