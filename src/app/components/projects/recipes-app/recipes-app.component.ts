import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recipes-app',
  templateUrl: './recipes-app.component.html',
  styleUrls: ['./recipes-app.component.css']
})
export class RecipesAppComponent {

  constructor(
    public change: MatDialogRef<RecipesAppComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
