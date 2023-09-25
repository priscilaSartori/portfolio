import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProjetosComponent } from './detalhes-projetos.component';

describe('DetalhesProjetosComponent', () => {
  let component: DetalhesProjetosComponent;
  let fixture: ComponentFixture<DetalhesProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesProjetosComponent]
    });
    fixture = TestBed.createComponent(DetalhesProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
