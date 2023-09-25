import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {

  constructor(
    public change: MatDialogRef<ShoppingcartComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
