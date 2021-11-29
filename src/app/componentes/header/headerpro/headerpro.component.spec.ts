import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderproComponent } from './headerpro.component';

describe('HeaderproComponent', () => {
  let component: HeaderproComponent;
  let fixture: ComponentFixture<HeaderproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
