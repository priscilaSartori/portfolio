import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-api-recipes',
  templateUrl: './api-recipes.component.html',
  styleUrls: ['./api-recipes.component.css']
})
export class ApiRecipesComponent {

  constructor(
    public change: MatDialogRef<ApiRecipesComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
