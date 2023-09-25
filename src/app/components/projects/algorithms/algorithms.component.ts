import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent {
  
  constructor(
    public change: MatDialogRef<AlgorithmsComponent>,
  ) { }
  
  toggleChangePassword() {
    this.change.close();
  }
}



