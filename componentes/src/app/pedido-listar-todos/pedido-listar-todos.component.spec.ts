import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListarTodosComponent } from './pedido-listar-todos.component';

describe('PedidoListarTodosComponent', () => {
  let component: PedidoListarTodosComponent;
  let fixture: ComponentFixture<PedidoListarTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoListarTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
