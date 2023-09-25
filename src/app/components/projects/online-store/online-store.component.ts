import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.css']
})
export class OnlineStoreComponent {

  constructor(
    public change: MatDialogRef<OnlineStoreComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
