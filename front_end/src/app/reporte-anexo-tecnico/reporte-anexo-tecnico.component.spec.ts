import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAnexoTecnicoComponent } from './reporte-anexo-tecnico.component';

describe('ReporteAnexoTecnicoComponent', () => {
  let component: ReporteAnexoTecnicoComponent;
  let fixture: ComponentFixture<ReporteAnexoTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAnexoTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAnexoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
