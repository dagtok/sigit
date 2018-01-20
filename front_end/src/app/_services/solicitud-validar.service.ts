import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from 'app/_models';
import { environment } from '../../environments/environment';

@Injectable()
export class SolicitudValidarService {

  API_URL: string;
  pedido: Pedido;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API_URL = 'http://' + environment.api_url + ':8000/';
    } else if (environment.production === false) {
      this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
    }
  }

  buscarPedido(_pedido_id: string) {
    // let parametros = new HttpParams().set('_id', _pedido_id);
    // return this.http.get<Pedido>(this.API_URL + 'pedidos', { params: parametros });
    return this.http.get<Pedido>(this.API_URL + 'pedidos/' + _pedido_id);
  }

  validarPedido(_pedido: Pedido) {
    return this.http
      .patch(this.API_URL + 'pedidos/' + _pedido._id, _pedido, {
        headers: new HttpHeaders().set('Authorization_dagtok', 'some-token')
      });
  }

}
