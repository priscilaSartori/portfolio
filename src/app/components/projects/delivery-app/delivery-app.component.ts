import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-app',
  templateUrl: './delivery-app.component.html',
  styleUrls: ['./delivery-app.component.css']
})
export class DeliveryAppComponent {

  constructor(
    public change: MatDialogRef<DeliveryAppComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
