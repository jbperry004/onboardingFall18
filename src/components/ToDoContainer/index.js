import React, { Component } from "react";


let id = 0;

class Add extends Component {
  constructor(props) {
    super(props); 
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addTodo(this.state.value);
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}

class Todoitem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.deleteTodo(this.props.id);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <li>{this.props.payload}</li>
        <input type="submit" value="delete"/>
      </form>
    );
  }
}

class Current extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todos.map((todo) => 
        <Todoitem id={todo.id} payload={todo.payload} deleteTodo={this.props.deleteTodo} />
      );
    return (
      <div>
        <h1>Current Todos:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.searchTodo(event.target.value);
  }

  render () {
    return (
      <div>
        <h1>Search Todos:</h1>
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {allTodos : [], filter : ''};

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
  }
  
  addTodo (payload) {
    this.setState((state, props) => ({
      allTodos : state.allTodos.concat([{
        payload : payload,
        id : id
      }])
    }));
    id++;
  }

  deleteTodo (id) {
    this.setState((state, props) => ({
      allTodos : state.allTodos.filter(item => item.id != id)
    }));
  }

  searchTodo(criteria) {
    this.setState({
      filter : criteria
    });
  }

  render() {

    const displayTodos = this.state.allTodos.filter(item => item.payload.match(this.state.filter));

    return (
      <div>
        <div>
          <Add addTodo={this.addTodo} />
        </div>
        <div>
          <Current todos={displayTodos} deleteTodo={this.deleteTodo} />
        </div>
        <div>
          <Search searchTodo={this.searchTodo}/>
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
