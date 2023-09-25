import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryunfoComponent } from './tryunfo.component';

describe('TryunfoComponent', () => {
  let component: TryunfoComponent;
  let fixture: ComponentFixture<TryunfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryunfoComponent]
    });
    fixture = TestBed.createComponent(TryunfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
