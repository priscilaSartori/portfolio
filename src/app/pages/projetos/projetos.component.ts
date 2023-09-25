import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PixelArtComponent } from 'src/app/components/projects/pixel-art/pixel-art.component';
import { TodoListComponent } from 'src/app/components/projects/todo-list/todo-list.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  constructor(
    public dialog: MatDialog,
  ) { }

  displayInformation(event: any) {
    if(event.target.alt == 'Projeto Todo List') {
      this.dialog.open(TodoListComponent);
    }
    if(event.target.alt == 'Projeto Pixels Art') {
      this.dialog.open(PixelArtComponent);
    }

  }
}
