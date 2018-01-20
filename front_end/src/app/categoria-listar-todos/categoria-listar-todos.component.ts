import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../_services/index';
import { Modelo } from 'app/_models';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-categoria-listar-todos',
  templateUrl: './categoria-listar-todos.component.html',
  styleUrls: ['./categoria-listar-todos.component.css']
})
export class CategoriaListarTodosComponent implements OnInit {
  categorias: Modelo[];
  terminoDeBusqueda: string;

  constructor(public categoriaService: CategoriaService) {
    this.categoriaService.obtenerCatalogoCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  ngOnInit() {
    this.inputBusquedaListener();
  }

  inputBusquedaListener() {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('buscar-categoria'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscarCategorias(this.terminoDeBusqueda); // Busca producto
    });
  }

  buscarCategorias(_termino_de_busqueda: string) {
    const token = this.generarToken(_termino_de_busqueda);
    this.categoriaService.buscarCategoria(token).subscribe(data => {
      this.categorias = data;
    }).closed;
  }

  generarToken(_termino_de_busqueda: string) {
    return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

}
