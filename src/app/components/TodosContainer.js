import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/index';
import { Pagination } from 'react-bootstrap';

//create a dumb component that display all of this!

class TodosContainer extends Component {

  componentWillMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    const { todos } = this.props.todos;
    // const per_page = 10;
    // const pages = Math.ceil(this.props.todos.todos.length / per_page);
    // const current_page = this.props.page;
    // const start_offset = (current_page - 1) * per_page;
    // let start_count = 0;

    if (!todos) {
      return <li>Not yet …</li>;
    }
      return todos.map((todo, index) => {
        // if (index >= start_offset && start_count < per_page) {
        //   start_count++;
          return (<li key={index}>{todo.title}</li>);
        // }
      });
  }

  render() {
    return(
      <div>
        <ul>{this.renderTodos()}</ul>
          <Pagination className="users-pagination pull-right" bsSize="medium" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    todos: state.todos
    //page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  };
}

export default connect(mapStateToProps, { fetchTodos })(TodosContainer);