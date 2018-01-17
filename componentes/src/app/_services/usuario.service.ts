import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../_models/index';

@Injectable()
export class UsuarioService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://104.236.191.171:8000/';
  }

  crearUsuario(_nuevoUsuario: Usuario) {
    return this.http.post<Usuario>(this.API_URL + 'api/usuarios', _nuevoUsuario);
  }

  public obtenerCatalogoUsuarios() {
    return this.http.get<Usuario[]>(`${this.API_URL}api/usuarios`);
  }

  public obtenerClasificaciones() {
    return this.http.get(`${this.API_URL}api/unidades/niveles`);
  }
  public obtenerUsuarioPorId(_usuario_id: String) {
    return this.http.get<Usuario>(`${this.API_URL}api/usuarios/${_usuario_id}`);
  }

  public modificarUsuario(_categoria: Usuario) {
    return this.http.patch(this.API_URL + 'api/usuarios/' + _categoria._id, _categoria, {
      headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
    });
  }
  public eliminar(_usuario_id: String) {
    return this.http.delete<Usuario>(`${this.API_URL}api/usuarios/${_usuario_id}`);
  }

}
