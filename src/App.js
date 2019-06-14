import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {

  state ={
    todos:[
      {id:1,content:'LEARN REACT'},
      {id:2,content:'LEARN DEUTSCH'},
      {id:3,content:'meet FRIENDS'},
      {id:4,content:'TRAIN'}
    ]
  }
  render() {
    return (
      <div className="todo-App container">
        <h1 className = "center blue-text"> todo's</h1>
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
