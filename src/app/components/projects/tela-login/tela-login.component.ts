import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {

  constructor(
    public change: MatDialogRef<TelaLoginComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
