import React from 'react';

class TodoItem extends React.Component {
  render() {
    // Css variable :
    const completedStyle = {
      fontStyle: 'italic',
      color: '#d35e0f',
      /*color: 'blue',*/
      opacity: 0.6,
      /*textDecoration: 'line-through',*/
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

/*
Refactoring a class component to an arrow function :
function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

const TodoItem = (props) => {
  return <li>{props.todo.title}</li>;
};
*/

export default TodoItem;
