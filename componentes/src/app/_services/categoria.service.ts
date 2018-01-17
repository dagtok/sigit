import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria, Modelo } from '../_models/index';

@Injectable()
export class CategoriaService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://104.236.191.171:8000/';
  }

  public modificarCategoria(_categoria: Modelo) {
    return this.http.patch(this.API_URL + 'api/categorias/' + _categoria._id, _categoria, {
      headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
    });
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
