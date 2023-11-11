import { Component } from '@angular/core';
import { educationsData } from 'src/app/mocks/educations-data';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent {
  selectedEducation: any = educationsData[9];
  constructor() { }
  
  changeEducation(event: any) {
    console.log(this.selectedEducation)
    const selectedValue = event.target.value;
    this.selectedEducation = educationsData.find(edu => edu.Titulo === selectedValue);
  }

  handleModuleClick(value: string) {
    this.selectedEducation = educationsData.find(edu => edu.Titulo === value);
  }
}
