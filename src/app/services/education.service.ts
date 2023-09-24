import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  education: string = 'DataAnalytics';

  constructor() {
  }

  atualizarEducation(evento: string) {
    this.education = evento;
    console.log(this.education)
  }
}