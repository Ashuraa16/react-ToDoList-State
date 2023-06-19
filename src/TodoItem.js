import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "react Mini Project: Starting the project complted",
      completed: 0
    };
  }
  render() {
    return (
      <div className="todo-item">
        {this.state.completed == 1 ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
        <label>{this.state.text}</label>
      </div>
    );
  }
}

export default TodoItem;
