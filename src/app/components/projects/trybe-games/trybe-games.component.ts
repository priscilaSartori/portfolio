import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybe-games',
  templateUrl: './trybe-games.component.html',
  styleUrls: ['./trybe-games.component.css']
})
export class TrybeGamesComponent {

  constructor(
    public change: MatDialogRef<TrybeGamesComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
