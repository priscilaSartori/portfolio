import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybeGamesComponent } from './trybe-games.component';

describe('TrybeGamesComponent', () => {
  let component: TrybeGamesComponent;
  let fixture: ComponentFixture<TrybeGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybeGamesComponent]
    });
    fixture = TestBed.createComponent(TrybeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
