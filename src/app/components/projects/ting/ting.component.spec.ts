import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TingComponent } from './ting.component';

describe('TingComponent', () => {
  let component: TingComponent;
  let fixture: ComponentFixture<TingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TingComponent]
    });
    fixture = TestBed.createComponent(TingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
