import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.css']
})
export class CarShopComponent {

  constructor(
    public change: MatDialogRef<CarShopComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
