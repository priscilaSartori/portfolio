import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRecipesComponent } from './api-recipes.component';

describe('ApiRecipesComponent', () => {
  let component: ApiRecipesComponent;
  let fixture: ComponentFixture<ApiRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiRecipesComponent]
    });
    fixture = TestBed.createComponent(ApiRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});