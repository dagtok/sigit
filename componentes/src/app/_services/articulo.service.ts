import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from 'app/_models';

@Injectable()
export class ArticuloService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:8000/';
  }

  public crearArticulo(_nuevoArticulo: Articulo) {
    return this.http.post<Articulo>(this.API_URL + 'api/articulos', _nuevoArticulo);
  }

  public obtenerCatalogoArticulos() {
    return this.http.get<Articulo[]>(this.API_URL + 'api/articulos');
  }
}
