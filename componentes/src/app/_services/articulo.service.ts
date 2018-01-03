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
    console.log(_nuevoArticulo);
    return this.http.post<Articulo>(this.API_URL + 'api/articulos', _nuevoArticulo);
  }

}
