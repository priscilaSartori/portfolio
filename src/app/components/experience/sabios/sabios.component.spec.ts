import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiosComponent } from './sabios.component';

describe('SabiosComponent', () => {
  let component: SabiosComponent;
  let fixture: ComponentFixture<SabiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SabiosComponent]
    });
    fixture = TestBed.createComponent(SabiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
