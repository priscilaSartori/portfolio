import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybetsComponent } from './trybets.component';

describe('TrybetsComponent', () => {
  let component: TrybetsComponent;
  let fixture: ComponentFixture<TrybetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybetsComponent]
    });
    fixture = TestBed.createComponent(TrybetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
