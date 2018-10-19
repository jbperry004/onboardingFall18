import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, filter, removeTodo, searchTodos }) => {
  let filtered = todos.filter(todo => todo.title.match(filter));
  if (filtered.length > 0) {
    return (
      <div>
        <ul>
          {filtered.map((todo, index) => {
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
    return filter ? (
      <div>
        <p>No matches found</p>{" "}
        <input placeholder="search" onChange={searchTodos} />{" "}
      </div>
    ) : (
      "No todos to complete"
    );
  }
};

export default TodoList;
