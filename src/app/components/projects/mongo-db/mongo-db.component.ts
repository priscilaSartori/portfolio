import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mongo-db',
  templateUrl: './mongo-db.component.html',
  styleUrls: ['./mongo-db.component.css']
})
export class MongoDBComponent {

  constructor(
    public change: MatDialogRef<MongoDBComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
