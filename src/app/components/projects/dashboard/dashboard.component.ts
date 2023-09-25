import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    public change: MatDialogRef<DashboardComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }

}
