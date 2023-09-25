import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ting',
  templateUrl: './ting.component.html',
  styleUrls: ['./ting.component.css']
})
export class TingComponent {

  constructor(
    public change: MatDialogRef<TingComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
