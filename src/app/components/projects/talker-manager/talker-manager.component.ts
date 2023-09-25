import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-talker-manager',
  templateUrl: './talker-manager.component.html',
  styleUrls: ['./talker-manager.component.css']
})
export class TalkerManagerComponent {

  constructor(
    public change: MatDialogRef<TalkerManagerComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
