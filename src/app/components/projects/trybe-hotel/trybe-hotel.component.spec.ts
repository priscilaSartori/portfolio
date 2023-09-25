import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybeHotelComponent } from './trybe-hotel.component';

describe('TrybeHotelComponent', () => {
  let component: TrybeHotelComponent;
  let fixture: ComponentFixture<TrybeHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybeHotelComponent]
    });
    fixture = TestBed.createComponent(TrybeHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
