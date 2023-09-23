import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  theme = false;

  constructor(private router: Router) { }

  changeTheme() {
    this.theme = !this.theme
  }

  changeHome() {
    this.router.navigate(['']);
  }

  changeAbout() {
    this.router.navigate(['/about']);
  }

  changeSkills() {
    this.router.navigate(['/skills']);
  }

  changeExperiences() {
    this.router.navigate(['/experience']);
  }
  
  changeProjects() {
    this.router.navigate(['/projects']);
  }
}
