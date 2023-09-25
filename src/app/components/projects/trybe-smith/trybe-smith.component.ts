import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybe-smith',
  templateUrl: './trybe-smith.component.html',
  styleUrls: ['./trybe-smith.component.css']
})
export class TrybeSmithComponent {

  constructor(
    public change: MatDialogRef<TrybeSmithComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
