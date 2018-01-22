import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ReportesService {
  API_URL: string;
  articulos: Array<object>;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API_URL = 'http://' + environment.api_url + ':8000/';
    } else if (environment.production === false) {
      this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
    }
  }

  obtenerReporteAnexoTecnico() {
    return this.http.get<object[]>(this.API_URL + 'api/reportes/anexo-tecnico');
  }

  obtenerReporteEstudioFactibilidad() {
    return this.http.get<object[]>(this.API_URL + 'api/reportes/estudio-factibilidad');
  }
}
