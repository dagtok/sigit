import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaListarTodosComponent } from './categoria-listar-todos.component';

describe('CategoriaListarTodosComponent', () => {
  let component: CategoriaListarTodosComponent;
  let fixture: ComponentFixture<CategoriaListarTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaListarTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaListarTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
