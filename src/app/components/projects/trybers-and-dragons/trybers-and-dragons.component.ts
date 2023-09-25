import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybers-and-dragons',
  templateUrl: './trybers-and-dragons.component.html',
  styleUrls: ['./trybers-and-dragons.component.css']
})
export class TrybersAndDragonsComponent {

  constructor(
    public change: MatDialogRef<TrybersAndDragonsComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
