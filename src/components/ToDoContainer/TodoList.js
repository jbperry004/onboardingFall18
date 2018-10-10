import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
            {(props.todos.map((todo, index) => {
                return <li key={index}>{todo.title}
                    <button onClick={() => props.removeTodo(index)}>Delete</button>
                </li>
            }))}
        </ul>
    )
}

export default TodoList;