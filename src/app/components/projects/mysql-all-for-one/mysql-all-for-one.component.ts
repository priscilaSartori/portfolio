import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mysql-all-for-one',
  templateUrl: './mysql-all-for-one.component.html',
  styleUrls: ['./mysql-all-for-one.component.css']
})
export class MysqlAllForOneComponent {

  constructor(
    public change: MatDialogRef<MysqlAllForOneComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
