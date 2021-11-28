import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionLoginComponent } from './opcion-login.component';

describe('OpcionLoginComponent', () => {
  let component: OpcionLoginComponent;
  let fixture: ComponentFixture<OpcionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
