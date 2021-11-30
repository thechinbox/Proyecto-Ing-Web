import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinpublicarComponent } from './sinpublicar.component';

describe('SinpublicarComponent', () => {
  let component: SinpublicarComponent;
  let fixture: ComponentFixture<SinpublicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinpublicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinpublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
