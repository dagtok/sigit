import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Articulo } from 'app/_models';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticuloService {

  API_URL: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API_URL = 'http://' + environment.api_url + ':8000/';
    } else if (environment.production === false) {
      this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
    }
  }

  buscarArticulo(_parametro_de_busqueda: string) {
    const parametros = new HttpParams().set('buscar', _parametro_de_busqueda);
    return this.http.get<Articulo[]>(this.API_URL + 'api/articulos', { params: parametros });
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
