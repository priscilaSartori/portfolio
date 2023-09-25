import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybeSmithComponent } from './trybe-smith.component';

describe('TrybeSmithComponent', () => {
  let component: TrybeSmithComponent;
  let fixture: ComponentFixture<TrybeSmithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybeSmithComponent]
    });
    fixture = TestBed.createComponent(TrybeSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
