import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { ArticuloService, AuthenticationService, PedidoService } from '../_services/index';
import { Articulo, ArticuloCarrito, Pedido } from 'app/_models';
import { audit } from 'rxjs/operator/audit';

@Component({
  // selector: 'app-solicitud',
  moduleId: module.id.toString(),
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {
  catalogoProductos: Array<Articulo>;
  errorHttp: Boolean;
  cargando: Boolean;
  terminoDeBusqueda: string;
  detalleArticulo: ArticuloCarrito;
  pedido: Pedido;

  constructor(public articuloService: ArticuloService,
    public pedidoServicio: PedidoService,
    public autentificacionService: AuthenticationService) {
    this.cargando = true;
    this.obtenerCatalogoDeProductos();
    this.inicializarPedido();
  }

  ngOnInit(): void {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('client-search'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscaProductos(this.terminoDeBusqueda); // Busca producto
    });
    this.cargando = false;
  }

  obtenerCatalogoDeProductos() {
    this.pedidoServicio.obtenerCatalogoProductos().subscribe(data => {
      console.log(data);
      this.catalogoProductos = data;
    }).closed;
  }

  buscaProductos(_termino_de_busqueda: string) {
    const token = this.generarToken(_termino_de_busqueda);
    this.pedidoServicio.buscarProductoEnCatalogo(token).subscribe(data => {
      this.catalogoProductos = data;
    }).closed;
  }
  generarToken(_termino_de_busqueda: string) {
    return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }
  eliminarProductoCarrito(_posicion: number) {
    // alert("Boorar" + _posicion);
    // array.splice(index, 1);
    this.pedidoServicio.borrarArticuloDeCarrito(_posicion);
  }

  restarArticuloACarrito(_posicion: number) {
    this.pedidoServicio.restarArticuloACarrito(_posicion);
  }

  sumarArticuloACarrito(_posicion: number) {
    this.pedidoServicio.sumarArticuloACarrito(_posicion);
  }

  agregarArticuloAlCarrito(_articulo: ArticuloCarrito) {
    this.pedidoServicio.agregarArticuloAlCarrito(_articulo);
  }

  mostrarDetalleArticulo(_articulo: Articulo, _posicion: number): void {
    this.detalleArticulo = new ArticuloCarrito(
      _articulo._id,
      _articulo.nombre,
      1,
      _articulo.token,
      _articulo.categoria,
      null,
      _articulo.propiedades
    );
  }

  inicializarPedido() {

    const db_usuario = this.autentificacionService.getUserInfo(); // Obtiene informacion del local storage
    // console.log(db_usuario);

    const unidad = {
      '_id': db_usuario.unidad._id,
      'clave_ur': db_usuario.unidad.clave_ur,
      'nombre': db_usuario.unidad.nombre,
      'sigla': db_usuario.unidad.sigla,
      'direccion': db_usuario.unidad.direccion
    };

    const elaboro = {
      '_id': db_usuario._id,
      'nombre': db_usuario.nombre,
      'fecha': null
    };

    const autorizo = {
      '_id': null,
      'nombre': null,
      'fecha': null
    };

    this.pedido = new Pedido(null, null, unidad, elaboro, autorizo, this.pedidoServicio.articulosCarrito);

  }

  finalizarSolicitud() {
    this.pedidoServicio.registrarPedido(this.pedido).subscribe(data => {
      // console.log(data);
      this.pedidoServicio.inicializarCarrito();
      this.inicializarPedido();
    });
  }

  agregaProductoDetalleArticulo(): void {
    this.detalleArticulo.cantidad += 1;
  }

  eliminaProductoDetalleArticulo(): void {
    if ((this.detalleArticulo.cantidad - 1) > 0) {
      this.detalleArticulo.cantidad -= 1;
    } else {
      this.detalleArticulo.cantidad = 1;
    }
  }
}
