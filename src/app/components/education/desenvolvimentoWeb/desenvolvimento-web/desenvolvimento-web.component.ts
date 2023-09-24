import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-desenvolvimento-web',
  templateUrl: './desenvolvimento-web.component.html',
  styleUrls: ['./desenvolvimento-web.component.css']
})
export class DesenvolvimentoWebComponent {
 
  constructor(
    private educationService: EducationService,
    private router: Router,
  ) { }

  toggleComponent(event: any) {
    this.educationService.atualizarEducation(event.target.value);
    this.router.navigate(['education']); 
  }
}
