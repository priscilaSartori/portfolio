import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybe-bank',
  templateUrl: './trybe-bank.component.html',
  styleUrls: ['./trybe-bank.component.css']
})
export class TrybeBankComponent {

  constructor(
    public change: MatDialogRef<TrybeBankComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
