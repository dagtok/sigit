import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { PedidoService } from '../_services/index';
import { Observable } from 'rxjs/Rx';
import { Pedido } from 'app/_models';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[];
  terminoDeBusqueda: string;

  constructor(
    public pedidoService: PedidoService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.pedidoService.obtenerCatalogoPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
    this.inputBusquedaListener();
  }

  inputBusquedaListener() {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('buscar-pedido'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscaPedidos(this.terminoDeBusqueda); // Busca producto
    });
  }

  buscaPedidos(_termino_de_busqueda: string) {
    this.pedidoService.buscarPedido(_termino_de_busqueda).subscribe(data => {
      this.pedidos = data;
    }).closed;
  }
}
