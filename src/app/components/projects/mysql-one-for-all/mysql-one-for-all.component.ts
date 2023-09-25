import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mysql-one-for-all',
  templateUrl: './mysql-one-for-all.component.html',
  styleUrls: ['./mysql-one-for-all.component.css']
})
export class MysqlOneForAllComponent {

  constructor(
    public change: MatDialogRef<MysqlOneForAllComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
