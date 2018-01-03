import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../_models/index';

@Injectable()
export class ModeloService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:8000/';
  }
  public crearCategoria(_nuevaCategoria: Modelo) {
    // console.log(_nuevaCategoria);
    return this.http.post<Modelo>(this.API_URL + 'api/modelos', _nuevaCategoria);
  }
  /*
    public borrar(Modelo: Modelo) {
      // return this.http.delete<Modelo>(`${this.URL}/${Modelo._id}`);
    }

    public obtener(id: string) {
      // return this.http.get<Modelo>(`${this.URL}/${id}`);
    }
    public actualizar(Modelo: Modelo) {
      // return this.http.put<Modelo>(`${this.URL}/${Modelo._id}`, Modelo);
    }
    public listar() {
      console.log("listando");
      return this.http.get<Modelo[]>(this.API_URL + 'api/Modelos');
    }
  */
}
