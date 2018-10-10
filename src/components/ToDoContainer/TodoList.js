import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, searchTodos }) => {
  if (todos.length > 0) {
    return (
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todo={todo}
                removeTodo={() => removeTodo(index)}
              />
            );
          })}
        </ul>
        <input placeholder="search" onChange={searchTodos} />
      </div>
    );
  } else {
    return <p>No Todos to complete</p>;
  }
};

export default TodoList;
