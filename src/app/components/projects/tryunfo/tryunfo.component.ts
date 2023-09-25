import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tryunfo',
  templateUrl: './tryunfo.component.html',
  styleUrls: ['./tryunfo.component.css']
})
export class TryunfoComponent {

  constructor(
    public change: MatDialogRef<TryunfoComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
