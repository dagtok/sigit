import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListarTodosComponent } from './usuario-listar-todos.component';

describe('UsuarioListarTodosComponent', () => {
  let component: UsuarioListarTodosComponent;
  let fixture: ComponentFixture<UsuarioListarTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioListarTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
