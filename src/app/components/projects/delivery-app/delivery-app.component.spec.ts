import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAppComponent } from './delivery-app.component';

describe('DeliveryAppComponent', () => {
  let component: DeliveryAppComponent;
  let fixture: ComponentFixture<DeliveryAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryAppComponent]
    });
    fixture = TestBed.createComponent(DeliveryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
