import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tfc',
  templateUrl: './tfc.component.html',
  styleUrls: ['./tfc.component.css']
})
export class TFCComponent {

  constructor(
    public change: MatDialogRef<TFCComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
