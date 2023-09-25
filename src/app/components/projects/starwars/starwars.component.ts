import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {

  constructor(
    public change: MatDialogRef<StarwarsComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
