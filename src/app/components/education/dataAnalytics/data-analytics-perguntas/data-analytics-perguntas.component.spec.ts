import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsPerguntasComponent } from './data-analytics-perguntas.component';

describe('DataAnalyticsPerguntasComponent', () => {
  let component: DataAnalyticsPerguntasComponent;
  let fixture: ComponentFixture<DataAnalyticsPerguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsPerguntasComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
