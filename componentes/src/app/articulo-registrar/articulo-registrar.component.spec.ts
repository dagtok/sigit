import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloRegistrarComponent } from './articulo-registrar.component';

describe('ArticuloRegistrarComponent', () => {
  let component: ArticuloRegistrarComponent;
  let fixture: ComponentFixture<ArticuloRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
