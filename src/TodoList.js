import React, { Component } from 'react';
import { observer } from 'mobx-react';

const TodoList = observer(class TodoList extends Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store
    const todolist = filteredTodos.map( todo => (<li key={todo.id}>
      <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       {todo.value}</li>))

    return (
      <div>
        <h2>Todos</h2>
        <h4>Add todo: <input className="create" onKeyPress={this.createNew.bind(this)} /></h4>
        <h4>Filter: <input className="filter" value={filter} onChange={this.filter.bind(this)} /></h4>
        <ul>
          {todolist}
        </ul>
        <a href="#" onClick={this.props.store.clearComplete}>Clear complete</a>
      </div>
    )
  }
})

export default TodoList
