import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoproComponent } from './cursopro.component';

describe('CursoproComponent', () => {
  let component: CursoproComponent;
  let fixture: ComponentFixture<CursoproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
