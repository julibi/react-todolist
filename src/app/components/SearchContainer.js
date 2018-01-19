import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';

//create a dumb component that display all of this!

class SearchContainer extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    if (!this.props.todos.todos) {
      return <div>sry, not yet</div>;
    }
    return <div>{this.props.todos.todos[0].title}</div>;
  }

  render() {
    console.log(this.props.todos);
    return(
      <div>
        <h3>Ok, so  let me further misuse a component to do something completely different than what it was acutally designed for …</h3>
        <ul>{this.renderTodos()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, { fetchTodos })(SearchContainer);