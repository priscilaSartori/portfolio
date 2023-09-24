import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebCienciaDadosComponent } from './desenvolvimento-web-ciencia-dados.component';

describe('DesenvolvimentoWebCienciaDadosComponent', () => {
  let component: DesenvolvimentoWebCienciaDadosComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebCienciaDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebCienciaDadosComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebCienciaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
