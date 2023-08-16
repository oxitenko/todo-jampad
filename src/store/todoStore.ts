import {action, computed, makeObservable, observable} from 'mobx';
import uniqid from 'uniqid';


interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}

class ToDoStore {
    todos: ITodo[] = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            totalTodosCount: computed,
            completedTodosCount: computed,
            addTodo: action,
            remove: action,
            completedTodo: action,
        });
    }

    addTodo(todo: string) {
        this.todos.push({
            id: uniqid(),
            title: todo,
            completed: false,
        });
    }

    get completedTodosCount() {
        return this.todos.filter((todo) => todo.completed === true).length;
    }

    get totalTodosCount() {
        return this.todos.length;
    }

    remove(id: string) {
        this.todos = this.todos.filter((item) => item.id !== id);
    }

    completedTodo(id: string) {
        this.todos = this.todos.map((item) =>
            item.id === id ? {...item, completed: !item.completed} : item,
        );
    }
}

export default new ToDoStore();