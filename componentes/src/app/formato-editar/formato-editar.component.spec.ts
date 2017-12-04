import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoEditarComponent } from './formato-editar.component';

describe('FormatoEditarComponent', () => {
  let component: FormatoEditarComponent;
  let fixture: ComponentFixture<FormatoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
