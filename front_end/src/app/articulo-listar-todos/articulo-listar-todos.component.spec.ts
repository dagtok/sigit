import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloListarTodosComponent } from './articulo-listar-todos.component';

describe('ArticuloListarTodosComponent', () => {
  let component: ArticuloListarTodosComponent;
  let fixture: ComponentFixture<ArticuloListarTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloListarTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
