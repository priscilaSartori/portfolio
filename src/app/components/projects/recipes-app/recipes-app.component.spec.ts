import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAppComponent } from './recipes-app.component';

describe('RecipesAppComponent', () => {
  let component: RecipesAppComponent;
  let fixture: ComponentFixture<RecipesAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesAppComponent]
    });
    fixture = TestBed.createComponent(RecipesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
