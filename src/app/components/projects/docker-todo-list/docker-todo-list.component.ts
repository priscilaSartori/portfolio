import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-docker-todo-list',
  templateUrl: './docker-todo-list.component.html',
  styleUrls: ['./docker-todo-list.component.css']
})
export class DockerTodoListComponent {

  constructor(
    public change: MatDialogRef<DockerTodoListComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
