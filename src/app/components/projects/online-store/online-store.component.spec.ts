import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStoreComponent } from './online-store.component';

describe('OnlineStoreComponent', () => {
  let component: OnlineStoreComponent;
  let fixture: ComponentFixture<OnlineStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineStoreComponent]
    });
    fixture = TestBed.createComponent(OnlineStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
