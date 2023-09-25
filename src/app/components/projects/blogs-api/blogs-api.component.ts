import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blogs-api',
  templateUrl: './blogs-api.component.html',
  styleUrls: ['./blogs-api.component.css']
})
export class BlogsApiComponent {

  constructor(
    public change: MatDialogRef<BlogsApiComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
