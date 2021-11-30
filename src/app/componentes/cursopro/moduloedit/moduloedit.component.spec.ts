import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloeditComponent } from './moduloedit.component';

describe('ModuloeditComponent', () => {
  let component: ModuloeditComponent;
  let fixture: ComponentFixture<ModuloeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
