import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoWebCSharpComponent } from './desenvolvimento-web-csharp.component';

describe('DesenvolvimentoWebCSharpComponent', () => {
  let component: DesenvolvimentoWebCSharpComponent;
  let fixture: ComponentFixture<DesenvolvimentoWebCSharpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvimentoWebCSharpComponent]
    });
    fixture = TestBed.createComponent(DesenvolvimentoWebCSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
