import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.css']
})
export class PixelArtComponent {
  constructor(
    public change: MatDialogRef<PixelArtComponent>,
  ) { }

  toggleChangePassword() {
    this.change.close();
  }
}
