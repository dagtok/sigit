import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/index';
import { Pedido } from 'app/_models';
@Component({
  selector: 'app-pedido-listar-todos',
  templateUrl: './pedido-listar-todos.component.html',
  styleUrls: ['./pedido-listar-todos.component.css']
})
export class PedidoListarTodosComponent implements OnInit {
  pedidos: Pedido[];
  constructor(public pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.obtenerCatalogoPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

}
