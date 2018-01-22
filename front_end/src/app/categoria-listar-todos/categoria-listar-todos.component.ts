import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { CategoriaService } from '../_services/index';
import { Modelo } from 'app/_models';
import { Observable } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-categoria-listar-todos',
  templateUrl: './categoria-listar-todos.component.html',
  styleUrls: ['./categoria-listar-todos.component.css']
})
export class CategoriaListarTodosComponent implements OnInit {
  categorias: Modelo[];
  terminoDeBusqueda: string;

  constructor(
    public categoriaService: CategoriaService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.categoriaService.obtenerCatalogoCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
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
    this.categoriaService.buscarCategoria(_termino_de_busqueda).subscribe(data => {
      this.categorias = data;
    }).closed;
  }
}
