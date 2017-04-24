import { computed, extendObservable} from "mobx"


class Todo {
    constructor(value) {
      extendObservable(this, {
        value : value,
        id : Date.now(),
        complete : false
      })

      }
}


class TodoStore {
  constructor() {
        extendObservable(this, {
            todos : [{value: "dummy", id: "O1", complete: false},],
            filter : "",
            get filteredTodos() {
              var matchesFilter = new RegExp(this.filter, "i")
              return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
            }

        })
    }

    createTodo(value) {
      this.todos.push(new Todo(value))
    }

    clearComplete = () => {
      const incompleteTodos = this.todos.filter(todo => !todo.complete)
      this.todos.replace(incompleteTodos)
    }


}

var store = new TodoStore()

export default store
