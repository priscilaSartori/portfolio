import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerTodoListComponent } from './docker-todo-list.component';

describe('DockerTodoListComponent', () => {
  let component: DockerTodoListComponent;
  let fixture: ComponentFixture<DockerTodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockerTodoListComponent]
    });
    fixture = TestBed.createComponent(DockerTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
