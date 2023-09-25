import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {

  constructor(
    public change: MatDialogRef<TriviaComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
