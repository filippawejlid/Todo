import { Todos } from "@/models/Todos";

export class todoHelper {
  toggleBoolean(todos: Todos[], id: number, newList: Todos[]) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (id === todo.id) {
        todo.done = !todo.done;
        todos.splice(i, 1);
        newList.push(todo);
      }
    }
  }

  deleteTodo(todos: Todos[], id: number) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];

      if (todo.id === id) {
        todos.splice(i, 1);
      }
    }
  }

  sortByLetter(todos: Todos[]) {
    todos.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortByTimeStamp(todos: Todos[]) {
    todos.sort((a, b) => a.timestamp - b.timestamp);
  }
}
