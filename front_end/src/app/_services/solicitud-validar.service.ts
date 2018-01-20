import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from 'app/_models';

@Injectable()
export class SolicitudValidarService {

  API_URL: string;
  pedido: Pedido;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://104.236.191.171:8000/api/';
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
