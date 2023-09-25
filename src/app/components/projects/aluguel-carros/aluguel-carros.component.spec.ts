import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelCarrosComponent } from './aluguel-carros.component';

describe('AluguelCarrosComponent', () => {
  let component: AluguelCarrosComponent;
  let fixture: ComponentFixture<AluguelCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluguelCarrosComponent]
    });
    fixture = TestBed.createComponent(AluguelCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
