import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: 1, title: 'aaaaa', completed: false},
        {id: 2, title: 'bbbbb', completed: false}, {
            id: 3,
            title: 'cccccc',
            completed: false
        },]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(todo) {
        this.todos = this.todos.filter(t=>t.id!==todo.id)
        console.log(this.todos)
    }

    completeTodo(todo) {
        todo.completed = !todo.completed
    }

}

export default new Todo()