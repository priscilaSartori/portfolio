import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.css']
})
export class RestaurantOrdersComponent {

  constructor(
    public change: MatDialogRef<RestaurantOrdersComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
