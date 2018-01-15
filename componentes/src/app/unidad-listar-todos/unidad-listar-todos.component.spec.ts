import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadListarTodosComponent } from './unidad-listar-todos.component';

describe('UnidadListarTodosComponent', () => {
  let component: UnidadListarTodosComponent;
  let fixture: ComponentFixture<UnidadListarTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadListarTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
