import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UnidadClasificacion, Unidad } from '../_models/index';

@Injectable()
export class UnidadService {

    API_URL: string;

    constructor(private http: HttpClient) {
        this.API_URL = 'http://localhost:8000/';
    }

    public obtenerClasificaciones() {
        return this.http.get<UnidadClasificacion[]>(this.API_URL + 'api/unidades/niveles');
    }
    public obtenerUnidadesPorClasificacion(_clasificacion) {
        let parametros = new HttpParams().set('clasificacion', _clasificacion);
        return this.http.get<Unidad[]>(this.API_URL + 'api/unidades/clasificacion', { params: parametros });
    }

}
