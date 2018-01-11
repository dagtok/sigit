import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../_models/index';

@Injectable()
export class UsuarioService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:8000/';
  }

  crearUsuario(_nuevoUsuario: Usuario) {
      return this.http.post<Usuario>(this.API_URL + 'api/usuarios', _nuevoUsuario);
  }

  public obtenerClasificaciones() {
    return this.http.get(this.API_URL + 'api/unidades/niveles');
  }

}
