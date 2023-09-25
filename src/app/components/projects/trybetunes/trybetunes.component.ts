import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybetunes',
  templateUrl: './trybetunes.component.html',
  styleUrls: ['./trybetunes.component.css']
})
export class TrybetunesComponent {

  constructor(
    public change: MatDialogRef<TrybetunesComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
