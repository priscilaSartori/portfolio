import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlOneForAllComponent } from './mysql-one-for-all.component';

describe('MysqlOneForAllComponent', () => {
  let component: MysqlOneForAllComponent;
  let fixture: ComponentFixture<MysqlOneForAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysqlOneForAllComponent]
    });
    fixture = TestBed.createComponent(MysqlOneForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
