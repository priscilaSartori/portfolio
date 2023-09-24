import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsProcessarDadosComponent } from './data-analytics-processar-dados.component';

describe('DataAnalyticsProcessarDadosComponent', () => {
  let component: DataAnalyticsProcessarDadosComponent;
  let fixture: ComponentFixture<DataAnalyticsProcessarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAnalyticsProcessarDadosComponent]
    });
    fixture = TestBed.createComponent(DataAnalyticsProcessarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
