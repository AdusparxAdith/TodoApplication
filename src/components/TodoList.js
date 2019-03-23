import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return this.props.tasks.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTask={this.props.delTask}
        theme={this.props.theme}
      />
    ));
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default TodoList;
