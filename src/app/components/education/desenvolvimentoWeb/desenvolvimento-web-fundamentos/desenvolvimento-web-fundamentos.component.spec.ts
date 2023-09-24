import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebFundamentosComponent } from './desenvolvimento-web-fundamentos.component';

describe('DesenvolvimentoWebFundamentosComponent', () => {
  let component: DesenvolvimentoWebFundamentosComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebFundamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebFundamentosComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebFundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
