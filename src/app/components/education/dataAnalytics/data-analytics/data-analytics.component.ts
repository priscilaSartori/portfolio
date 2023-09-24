import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css']
})
export class DataAnalyticsComponent {
  
  constructor(
    private educationService: EducationService,
    private router: Router,
  ) { }

  toggleComponent(event: any) {
    this.educationService.atualizarEducation(event.target.value);
    this.router.navigate(['education']); 
  }
}
