import React from 'react';

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <label htmlFor='newTodo'>new Todo</label>
            <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" placeholder="Add todo" value={props.newTodo} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodoForm;