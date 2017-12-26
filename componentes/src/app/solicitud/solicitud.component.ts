import { Component, OnInit } from '@angular/core';

import { SolicitudService } from '../_services/index';

@Component({
  // selector: 'app-solicitud',
  moduleId: module.id.toString(),
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent implements OnInit {

  productos:Object;
  errorHttp:Boolean;
  cargando:Boolean;

  constructor(public solicitudServicio:SolicitudService) {
  }
  
  ngOnInit() {
    this.cargando = true;
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.solicitudServicio.obtenerCatalogoProductos().subscribe(data => {
      this.productos = data;
    }).closed;
  }

  /*
  agregarLibro(_articulo){
    this.solicitud.agregarArticulo(_articulo);
  }

  mostrarAutor(_libro){
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor}` );
  }
  */
}
