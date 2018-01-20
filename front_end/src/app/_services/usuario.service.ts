import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../_models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class UsuarioService {

  API_URL: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API_URL = 'http://' + environment.api_url + ':8000/';
    } else if (environment.production === false) {
      this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
    }
  }

  buscarUsuario(_parametro_de_busqueda: string) {
    const parametros = new HttpParams().set('token', _parametro_de_busqueda);
    return this.http.get<Usuario[]>(this.API_URL + 'api/usuarios', { params: parametros });
  }

  crearUsuario(_nuevoUsuario: Usuario) {
    return this.http.post<Usuario>(this.API_URL + 'api/usuarios', _nuevoUsuario);
  }

  public eliminar(_usuario_id: String) {
    return this.http.delete<Usuario>(`${this.API_URL}api/usuarios/${_usuario_id}`);
  }

  public modificarUsuario(_categoria: Usuario) {
    return this.http.patch(this.API_URL + 'api/usuarios/' + _categoria._id, _categoria, {
      headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
    });
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
}
