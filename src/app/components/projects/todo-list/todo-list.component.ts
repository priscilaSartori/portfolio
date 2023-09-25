import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(
    public change: MatDialogRef<TodoListComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }
}
