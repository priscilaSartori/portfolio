import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebBackendComponent } from './desenvolvimento-web-backend.component';

describe('DesenvolvimentoWebBackendComponent', () => {
  let component: DesenvolvimentoWebBackendComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebBackendComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
