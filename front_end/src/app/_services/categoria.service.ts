import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Categoria, Modelo } from '../_models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class CategoriaService {

  API_URL: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API_URL = 'http://' + environment.api_url + ':8000/';
    } else if (environment.production === false) {
      this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
    }
  }

  public modificarCategoria(_categoria: Modelo) {
    return this.http.patch(this.API_URL + 'api/modelos/' + _categoria._id, _categoria, {
      headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
    });
  }

  buscarCategoria(_parametro_de_busqueda: string) {
    const parametros = new HttpParams().set('buscar', _parametro_de_busqueda);
    return this.http.get<Modelo[]>(this.API_URL + 'api/modelos', { params: parametros });
  }

  public crearCategoria(_nuevaCategoria: Modelo) {
    // console.log(_nuevaCategoria);
    return this.http.post<Modelo>(this.API_URL + 'api/modelos', _nuevaCategoria);
  }

  public obtenerCatalogoCategorias() {
    return this.http.get<Modelo[]>(this.API_URL + 'api/modelos');
  }

  public obtenerCategoriaPorId(_categoria_id: String) {
    return this.http.get<Modelo>(`${this.API_URL}api/modelos/${_categoria_id}`);
  }
  public eliminar(_categoria_id: String) {
    return this.http.delete<Modelo>(`${this.API_URL}api/modelos/${_categoria_id}`);
  }
  public obtenerNombres() {
    return this.http.get<Categoria[]>(this.API_URL + 'api/modelos/nombres');
  }

  public obtenerCaracteristicas(categoria_id: string) {
    return this.http.get<Modelo>(this.API_URL + 'api/modelos/' + categoria_id);
  }

}
