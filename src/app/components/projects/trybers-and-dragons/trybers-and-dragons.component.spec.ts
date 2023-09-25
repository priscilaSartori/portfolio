import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybersAndDragonsComponent } from './trybers-and-dragons.component';

describe('TrybersAndDragonsComponent', () => {
  let component: TrybersAndDragonsComponent;
  let fixture: ComponentFixture<TrybersAndDragonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybersAndDragonsComponent]
    });
    fixture = TestBed.createComponent(TrybersAndDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
