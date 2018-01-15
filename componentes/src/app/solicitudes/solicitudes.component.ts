import { Component, OnInit } from '@angular/core';
import { PedidoService, AuthenticationService } from '../_services/index';
import { Pedido } from 'app/_models';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  pedidos: Pedido[];
  constructor(public pedidoService: PedidoService, public sesionService: AuthenticationService) { }

  ngOnInit() {
    const informacion_usuario = this.sesionService.getUserInfo();
    this.pedidoService.obtenerPedidosPorUnidad(informacion_usuario.unidad.clave_ur).subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }
}
