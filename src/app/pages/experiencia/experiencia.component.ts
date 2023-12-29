import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experience: string = "Sabios";

  changeExperience(event: any) {
    this.experience = event.target.value;
  }
}
