import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsAnalisarDadosRComponent } from './data-analytics-analisar-dados-r.component';

describe('DataAnalyticsAnalisarDadosRComponent', () => {
  let component: DataAnalyticsAnalisarDadosRComponent;
  let fixture: ComponentFixture<DataAnalyticsAnalisarDadosRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsAnalisarDadosRComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsAnalisarDadosRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
