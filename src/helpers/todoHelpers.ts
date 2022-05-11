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

  // listSort(todos: Todos[]) {
  //   function compare(a: Todos, b: Todos) {
  //     if (a.title < b.title) return -1;
  //     if (a.title > b.title) return 1;
  //     return 0;
  //   }
  //   return todos.sort(compare);
  // }

  // listUnSort(arrays: Todos[]) {
  //   function compare(a: Todos, b: Todos) {
  //     if (a.title > b.title) return -1;
  //     if (a.title < b.title) return 1;
  //     return 0;
  //   }

  //   return arrays.sort(compare);
  // }
}
