import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../_services/index';

@Component({
  selector: 'app-reporte-estudio-factibilidad',
  templateUrl: './reporte-estudio-factibilidad.component.html',
  styleUrls: ['./reporte-estudio-factibilidad.component.css']
})
export class ReporteEstudioFactibilidadComponent implements OnInit {
  articulos: Array<object>;
  constructor(public reportesService: ReportesService) {
    this.obtenerReporte();
  }

  obtenerReporte(){
    this.reportesService.obtenerReporteEstudioFactibilidad().subscribe(data => {
      this.articulos = data;
    }).closed;
  }

  ngOnInit() {

  }
}
