import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybets',
  templateUrl: './trybets.component.html',
  styleUrls: ['./trybets.component.css']
})
export class TrybetsComponent {

  constructor(
    public change: MatDialogRef<TrybetsComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
