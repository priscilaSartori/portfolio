import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFCComponent } from './tfc.component';

describe('TFCComponent', () => {
  let component: TFCComponent;
  let fixture: ComponentFixture<TFCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TFCComponent]
    });
    fixture = TestBed.createComponent(TFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
