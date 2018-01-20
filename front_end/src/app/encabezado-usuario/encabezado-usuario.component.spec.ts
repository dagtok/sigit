import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoUsuarioComponent } from './encabezado.component';

describe('EncabezadoUsuarioComponent', () => {
  let component: EncabezadoUsuarioComponent;
  let fixture: ComponentFixture<EncabezadoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
