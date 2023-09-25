import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybetunesComponent } from './trybetunes.component';

describe('TrybetunesComponent', () => {
  let component: TrybetunesComponent;
  let fixture: ComponentFixture<TrybetunesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybetunesComponent]
    });
    fixture = TestBed.createComponent(TrybetunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
