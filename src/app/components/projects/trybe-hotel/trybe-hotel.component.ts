import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trybe-hotel',
  templateUrl: './trybe-hotel.component.html',
  styleUrls: ['./trybe-hotel.component.css']
})
export class TrybeHotelComponent {

  constructor(
    public change: MatDialogRef<TrybeHotelComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
