import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsFundamentosComponent } from './data-analytics-fundamentos.component';

describe('DataAnalyticsFundamentosComponent', () => {
  let component: DataAnalyticsFundamentosComponent;
  let fixture: ComponentFixture<DataAnalyticsFundamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsFundamentosComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsFundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
