import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlAllForOneComponent } from './mysql-all-for-one.component';

describe('MysqlAllForOneComponent', () => {
  let component: MysqlAllForOneComponent;
  let fixture: ComponentFixture<MysqlAllForOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysqlAllForOneComponent]
    });
    fixture = TestBed.createComponent(MysqlAllForOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
