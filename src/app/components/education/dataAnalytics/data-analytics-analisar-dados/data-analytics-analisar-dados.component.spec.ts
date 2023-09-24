import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsAnalisarDadosComponent } from './data-analytics-analisar-dados.component';

describe('DataAnalyticsAnalisarDadosComponent', () => {
  let component: DataAnalyticsAnalisarDadosComponent;
  let fixture: ComponentFixture<DataAnalyticsAnalisarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsAnalisarDadosComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsAnalisarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
