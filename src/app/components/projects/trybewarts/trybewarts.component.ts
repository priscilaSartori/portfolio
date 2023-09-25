import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybewarts',
  templateUrl: './trybewarts.component.html',
  styleUrls: ['./trybewarts.component.css']
})
export class TrybewartsComponent {

  constructor(
    public change: MatDialogRef<TrybewartsComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
