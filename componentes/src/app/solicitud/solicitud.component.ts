import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  articulos:Array<Object>;
  errorHttp: Boolean;
  cargando:Boolean;  

  constructor(private http: Http , public solicitud:SolicitudService) {
  }

  ngOnInit() {
    this.cargando = true;
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.request('assets/json/lista-de-libros.json').subscribe(
      (respuesta: Response) => { this.articulos = respuesta.json(); this.cargando = false },
      (respuesta: Response) => { this.errorHttp = true }
    )
  }

  agregarLibro(_articulo){
    this.solicitud.agregarArticulo(_articulo);
  }

  mostrarAutor(_libro){
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor}` );
  }

}
