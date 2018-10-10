import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
    if (props.todos.length > 0) {
        return (
            <div>
                <ul>
                    {(props.todos.map((todo, index) => {
                        return <TodoItem key={index} todo={todo} removeTodo={() => props.removeTodo(index)} />
                    }))}
                </ul>
                <input placeholder="search" onChange={props.searchTodos} />
            </div>

        )
    } else {
        return (
            <p>No Todos to complete</p>
        )
    }
}

export default TodoList;