import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybe-wallet',
  templateUrl: './trybe-wallet.component.html',
  styleUrls: ['./trybe-wallet.component.css']
})
export class TrybeWalletComponent {

  constructor(
    public change: MatDialogRef<TrybeWalletComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
