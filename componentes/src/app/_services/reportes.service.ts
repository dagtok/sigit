import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReportesService {
  API_URL: string;
  articulos: Array<object>;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://104.236.191.171:8000/api/';
  }

  obtenerReporteAnexoTecnico() {
    return this.http.get<object[]>(this.API_URL + 'reportes/anexo-tecnico');
  }

  obtenerReporteEstudioFactibilidad() {
    return this.http.get<object[]>(this.API_URL + 'reportes/estudio-factibilidad');
  }
}
