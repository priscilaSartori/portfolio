import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.css']
})
export class StoreManagerComponent {

  constructor(
    public change: MatDialogRef<StoreManagerComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
