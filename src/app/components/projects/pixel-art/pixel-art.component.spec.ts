import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelArtComponent } from './pixel-art.component';

describe('PixelArtComponent', () => {
  let component: PixelArtComponent;
  let fixture: ComponentFixture<PixelArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixelArtComponent]
    });
    fixture = TestBed.createComponent(PixelArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
