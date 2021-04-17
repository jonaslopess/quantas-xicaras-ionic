import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaIngredienteComponent } from './edita-ingrediente.component';

describe('EditaIngredienteComponent', () => {
  let component: EditaIngredienteComponent;
  let fixture: ComponentFixture<EditaIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaIngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
