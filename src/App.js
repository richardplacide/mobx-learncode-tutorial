import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './TodoStore.js';
import TodoList from './TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React : MOBX Tutorial</h2>
        </div>
        <p className="App-intro">
          Todo List with mobx
        </p>
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;
