import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() deleteTodoEvent: EventEmitter<Todo> = new EventEmitter();

  deleteItem(itemToDelete: Todo) {
    this.deleteTodoEvent.emit(itemToDelete)
  }
}
