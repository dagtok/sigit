import { Component, OnInit } from '@angular/core';

import { ReportesService } from '../_services/index';

@Component({
  selector: 'app-reporte-anexo-tecnico',
  templateUrl: './reporte-anexo-tecnico.component.html',
  styleUrls: ['./reporte-anexo-tecnico.component.css']
})
export class ReporteAnexoTecnicoComponent implements OnInit {
  categorias: Array<object>;
  constructor(public reportesService: ReportesService) {
    this.obtenerReporte();
  }

  obtenerReporte() {
    this.reportesService.obtenerReporteAnexoTecnico().subscribe(data => {
      this.categorias = data;
    }).closed;
  }

  ngOnInit() {

  }
}
