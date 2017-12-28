import { Component, OnInit } from '@angular/core';

import { SolicitudService } from '../_services/index';
import { Observable } from 'rxjs/Rx';
import { Articulo, ArticuloCarrito } from 'app/_models';

@Component({
  // selector: 'app-solicitud',
  moduleId: module.id.toString(),
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {
  catalogoProductos: Array<Articulo>
  errorHttp: Boolean;
  cargando: Boolean;
  terminoDeBusqueda: string;
  detalleArticulo: ArticuloCarrito;

  constructor(public solicitudServicio: SolicitudService) {
    this.cargando = true;
  }

  ngOnInit(): void {
    this.obtenerCatalogoDeProductos();

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
    this.solicitudServicio.obtenerCatalogoProductos().subscribe(data => {
      this.catalogoProductos = data;
    }).closed;
  }

  buscaProductos(terminoDeBusqueda: string) {
    this.solicitudServicio.buscarProductoEnCatalogo(terminoDeBusqueda).subscribe(data => {
      this.catalogoProductos = data;
    }).closed;
  }

  eliminarProductoCarrito(_posicion: number) {
    // alert("Boorar" + _posicion);
    // array.splice(index, 1);
    this.solicitudServicio.borrarArticuloDeCarrito(_posicion);
  }

  restarArticuloACarrito(_posicion: number) {
    this.solicitudServicio.restarArticuloACarrito(_posicion);
  }

  sumarArticuloACarrito(_posicion: number) {
    this.solicitudServicio.sumarArticuloACarrito(_posicion);
  }

  agregarArticuloAlCarrito(_articulo: ArticuloCarrito) {
    this.solicitudServicio.agregarArticuloAlCarrito(_articulo);
  }

  mostrarDetalleArticulo(_articulo: Articulo, _posicion: number): void{
    this.detalleArticulo = new ArticuloCarrito(
      _articulo._id,
      _articulo.nombre,
      1,
      _articulo.token,
      _articulo.categoria,
      _articulo.subcategoria,
      _articulo.propiedades
    );
  }

  agregaProductoDetalleArticulo(): void{
    this.detalleArticulo.cantidad += 1;
  }

  eliminaProductoDetalleArticulo(): void {
    if ( (this.detalleArticulo.cantidad - 1) > 0) {
      this.detalleArticulo.cantidad -= 1;
    } else {
      this.detalleArticulo.cantidad = 1;
    }
  }
}
