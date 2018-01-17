import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from 'app/_models';

@Injectable()
export class ArticuloService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://104.236.191.171:8000/';
  }

  public crearArticulo(_nuevoArticulo: Articulo) {
    return this.http.post<Articulo>(this.API_URL + 'api/articulos', _nuevoArticulo);
  }

  public eliminar(_articulo_id: String) {
    return this.http.delete<Articulo>(`${this.API_URL}api/articulos/${_articulo_id}`);
  }

  public modificarArticulo(_categoria: Articulo) {
    return this.http.patch(this.API_URL + 'api/articulos/' + _categoria._id, _categoria, {
      headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
    });
  }

  public obtenerCatalogoArticulos() {
    return this.http.get<Articulo[]>(this.API_URL + 'api/articulos');
  }

  public obtenerArticuloPorId(_articulo_id: String) {
    return this.http.get<Articulo>(`${this.API_URL}api/articulos/${_articulo_id}`);
  }
}
