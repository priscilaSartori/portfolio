import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aluguel-carros',
  templateUrl: './aluguel-carros.component.html',
  styleUrls: ['./aluguel-carros.component.css']
})
export class AluguelCarrosComponent {

  constructor(
    public change: MatDialogRef<AluguelCarrosComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
