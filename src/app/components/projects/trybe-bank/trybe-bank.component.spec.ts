import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybeBankComponent } from './trybe-bank.component';

describe('TrybeBankComponent', () => {
  let component: TrybeBankComponent;
  let fixture: ComponentFixture<TrybeBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybeBankComponent]
    });
    fixture = TestBed.createComponent(TrybeBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
