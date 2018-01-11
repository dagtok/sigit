import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEstudioFactibilidadComponent } from './reporte-estudio-factibilidad.component';

describe('ReporteEstudioFactibilidadComponent', () => {
  let component: ReporteEstudioFactibilidadComponent;
  let fixture: ComponentFixture<ReporteEstudioFactibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteEstudioFactibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEstudioFactibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
