import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  productos:Object;
  errorHttp: Boolean;
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
