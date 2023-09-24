import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  constructor(
    public educationService: EducationService,
  ) { }

  changeEducation(event: any) {
    this.educationService.atualizarEducation(event.target.value);
    console.log(event.target.value)
  }
}
