import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebComponent } from './desenvolvimento-web.component';

describe('DesenvolvimentoWebComponent', () => {
  let component: DesenvolvimentoWebComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
