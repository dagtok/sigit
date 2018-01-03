import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria, Modelo } from '../_models/index';

@Injectable()
export class CategoriaService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:8000/';
  }
  /*
    agregarArticulo(_nuevoArticulo) {
      this.resultado.push(_nuevoArticulo);
    }
    mostrarArticulos() {
      if(this.resultado.length > 0){
        return this.resultado;
      } else {
        return false;
      }
    }
    public crear(categoria: Categoria) {
      // return this.http.post<Categoria>(this.URL, categoria);
    }

    public borrar(categoria: Categoria) {
      // return this.http.delete<Categoria>(`${this.URL}/${categoria._id}`);
    }

    public obtener(id: string) {
      // return this.http.get<Categoria>(`${this.URL}/${id}`);
    }
    public actualizar(categoria: Categoria) {
      // return this.http.put<Categoria>(`${this.URL}/${categoria._id}`, categoria);
    }
  */
  public listar() {
    return this.http.get<Categoria[]>(this.API_URL + 'api/modelos/nombres');
  }

  public obtenerCaracteristicas(categoria_id: string) {
    return this.http.get<Modelo>(this.API_URL + 'api/modelos/' + categoria_id);
  }
}
