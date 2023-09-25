import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsApiComponent } from './blogs-api.component';

describe('BlogsApiComponent', () => {
  let component: BlogsApiComponent;
  let fixture: ComponentFixture<BlogsApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsApiComponent]
    });
    fixture = TestBed.createComponent(BlogsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
