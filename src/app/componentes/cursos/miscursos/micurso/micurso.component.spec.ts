import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicursoComponent } from './micurso.component';

describe('MicursoComponent', () => {
  let component: MicursoComponent;
  let fixture: ComponentFixture<MicursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
