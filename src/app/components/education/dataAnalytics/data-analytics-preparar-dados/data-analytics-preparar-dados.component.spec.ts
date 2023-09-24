import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsPrepararDadosComponent } from './data-analytics-preparar-dados.component';

describe('DataAnalyticsPrepararDadosComponent', () => {
  let component: DataAnalyticsPrepararDadosComponent;
  let fixture: ComponentFixture<DataAnalyticsPrepararDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsPrepararDadosComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsPrepararDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
