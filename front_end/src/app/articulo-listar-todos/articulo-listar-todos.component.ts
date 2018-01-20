import { ArticuloService } from '../_services/index';
import { Articulo } from 'app/_models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-articulo-listar-todos',
  templateUrl: './articulo-listar-todos.component.html',
  styleUrls: ['./articulo-listar-todos.component.css']
})
export class ArticuloListarTodosComponent implements OnInit {
  articulos: Articulo[];
  terminoDeBusqueda: string;

  constructor(public articuloService: ArticuloService) { }

  ngOnInit() {
    this.articuloService.obtenerCatalogoArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });
    this.inputBusquedaListener();
  }

  inputBusquedaListener() {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('buscar-articulo'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscarArticulos(this.terminoDeBusqueda); // Busca producto
    });
  }

  buscarArticulos(_termino_de_busqueda: string) {
    const token = this.generarToken(_termino_de_busqueda);
    this.articuloService.buscarArticulo(token).subscribe(data => {
      this.articulos = data;
    }).closed;
  }

  generarToken(_termino_de_busqueda: string) {
    return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

}
