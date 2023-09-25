import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkerManagerComponent } from './talker-manager.component';

describe('TalkerManagerComponent', () => {
  let component: TalkerManagerComponent;
  let fixture: ComponentFixture<TalkerManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkerManagerComponent]
    });
    fixture = TestBed.createComponent(TalkerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
