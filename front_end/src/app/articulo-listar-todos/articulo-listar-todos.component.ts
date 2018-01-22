import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ArticuloService } from '../_services/index';
import { Articulo } from 'app/_models';
import { Observable } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-articulo-listar-todos',
  templateUrl: './articulo-listar-todos.component.html',
  styleUrls: ['./articulo-listar-todos.component.css']
})
export class ArticuloListarTodosComponent implements OnInit {
  articulos: Articulo[];
  terminoDeBusqueda: string;

  constructor(
    public articuloService: ArticuloService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

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
    this.articuloService.buscarArticulo(_termino_de_busqueda).subscribe(data => {
      this.articulos = data;
    }).closed;
  }
}
