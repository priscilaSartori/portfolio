import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebFrontEndComponent } from './desenvolvimento-web-front-end.component';

describe('DesenvolvimentoWebFrontEndComponent', () => {
  let component: DesenvolvimentoWebFrontEndComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebFrontEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebFrontEndComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
