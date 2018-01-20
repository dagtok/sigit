import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UnidadClasificacion, Unidad } from '../_models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class UnidadService {
    API_URL: string;

    constructor(private http: HttpClient) {
        if (environment.production) {
            this.API_URL = 'http://' + environment.api_url + ':8000/';
        } else if (environment.production === false) {
            this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
        }
    }
    public obtenerCatalogoUnidades() {
        return this.http.get<Unidad[]>(`${this.API_URL}api/unidades`);
    }
    public obtenerClasificaciones() {
        return this.http.get<UnidadClasificacion[]>(this.API_URL + 'api/unidades/niveles');
    }
    public obtenerUnidadesPorClasificacion(_clasificacion) {
        const parametros = new HttpParams().set('clasificacion', _clasificacion);
        return this.http.get<Unidad[]>(this.API_URL + 'api/unidades/clasificacion', { params: parametros });
    }
    crearUnidad(_nuevoUnidad: Unidad) {
        return this.http.post<Unidad>(this.API_URL + 'api/unidades', _nuevoUnidad);
    }

    buscarUnidad(_parametro_de_busqueda: string) {
        const parametros = new HttpParams().set('token', _parametro_de_busqueda);
        return this.http.get<Unidad[]>(this.API_URL + 'api/unidades', { params: parametros });
    }

    public obtenerCatalogoUnidads() {
        return this.http.get<Unidad[]>(`${this.API_URL}api/unidades`);
    }
    /*
    public obtenerClasificaciones() {
        return this.http.get(`${this.API_URL}api/unidades/niveles`);
    }
    */
    public obtenerUnidadPorId(_unidad_id: String) {
        return this.http.get<Unidad>(`${this.API_URL}api/unidades/${_unidad_id}`);
    }

    public modificarUnidad(_categoria: Unidad) {
        return this.http.patch(this.API_URL + 'api/unidades/' + _categoria._id, _categoria, {
            headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
        });
    }
    public eliminar(_unidad_id: String) {
        return this.http.delete<Unidad>(`${this.API_URL}api/unidades/${_unidad_id}`);
    }
}
