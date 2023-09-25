import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent {

  constructor(
    public change: MatDialogRef<MomentsComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
