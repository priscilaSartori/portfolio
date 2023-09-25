import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybewartsComponent } from './trybewarts.component';

describe('TrybewartsComponent', () => {
  let component: TrybewartsComponent;
  let fixture: ComponentFixture<TrybewartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybewartsComponent]
    });
    fixture = TestBed.createComponent(TrybewartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
