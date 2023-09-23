import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      let x: number = i + 1
      let item: Todo = {
        serialNo: x,
        title: `Task ${x}` ,
        desc: `Complete Task ${x}`,
        active: true
      }
      this.todos.push(item)
    }
  }

  deleteTodoItem(itemToDelete: Todo) {
    this.todos = this.todos.filter(
      (todo) => todo.serialNo != itemToDelete.serialNo
    )
  }
}
