import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsCompartilharDadosComponent } from './data-analytics-compartilhar-dados.component';

describe('DataAnalyticsCompartilharDadosComponent', () => {
  let component: DataAnalyticsCompartilharDadosComponent;
  let fixture: ComponentFixture<DataAnalyticsCompartilharDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsCompartilharDadosComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsCompartilharDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
