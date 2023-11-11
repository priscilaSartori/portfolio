import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent {
  @Input() education: any;
  @Output() moduleClicked = new EventEmitter<string>();

  constructor(
    ) {}

  toggleComponent(value: string) {
    this.moduleClicked.emit(value); 
  }
}
