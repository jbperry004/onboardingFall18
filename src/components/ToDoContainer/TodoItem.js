import React from 'react';

const TodoItem = (props) => {
    return (
        <li key={props.index}>{props.todo.title}
            <button onClick={props.removeTodo}>Delete</button>
        </li>
    )
}

export default TodoItem;