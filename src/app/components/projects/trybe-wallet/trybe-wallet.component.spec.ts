import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybeWalletComponent } from './trybe-wallet.component';

describe('TrybeWalletComponent', () => {
  let component: TrybeWalletComponent;
  let fixture: ComponentFixture<TrybeWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybeWalletComponent]
    });
    fixture = TestBed.createComponent(TrybeWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
