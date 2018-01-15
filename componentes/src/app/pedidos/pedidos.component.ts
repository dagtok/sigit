import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/index';
import { Pedido } from 'app/_models';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[];
  constructor(public pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.obtenerCatalogoPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }
}