import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasproComponent } from './ofertaspro.component';

describe('OfertasproComponent', () => {
  let component: OfertasproComponent;
  let fixture: ComponentFixture<OfertasproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
