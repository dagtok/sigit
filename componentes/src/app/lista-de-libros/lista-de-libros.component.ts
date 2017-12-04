import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {
  
  
  libros:Array<Object>;
  title:string = 'app works!';
  color:string = 'red';
  aleatorio:Number = Math.floor( Math.random() * 100 );
  errorHttp: Boolean;
  cargando:Boolean;
  valor1:Boolean = true;
  valor2:Boolean = true;

  numeros:Array<String>;
  personas:Array<Object>;

  constructor(private http: Http , public librosseleccionados:LibrosSeleccionadosService) {
      this.numeros = ["uno", "dos", "tres"];
      
      this.personas = [
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'},
        {id:'1', titulo:'EL retrato de dorian', autor:'Oscar Wilde'}
      ];
  }

   ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }

  cargarLista() {
    this.http.request('assets/json/lista-de-libros.json').subscribe(
      (respuesta: Response) => { this.libros = respuesta.json(); this.cargando = false },
      (respuesta: Response) => { this.errorHttp = true }
    )
  }

  agregarLibro(_libro){
    this.librosseleccionados.agregarLibros(_libro);
  }

  generarRandom():String{
    return Math.floor( Math.random() * 255 ).toString(16);
  }

  colorHex():String{
    return "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }

  mostrarAutor(_libro){
    alert(` ${_libro.titulo} fue escrito por ${_libro.autor}` );
  }

}