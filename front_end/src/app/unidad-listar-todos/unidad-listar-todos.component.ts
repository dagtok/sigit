import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { UnidadService } from 'app/_services';
import { Unidad } from 'app/_models';
import { Observable } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-unidad-listar-todos',
  templateUrl: './unidad-listar-todos.component.html',
  styleUrls: ['./unidad-listar-todos.component.css']
})
export class UnidadListarTodosComponent implements OnInit {
  unidades: Unidad[];
  terminoDeBusqueda: string;

  constructor(
    public unidadService: UnidadService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.unidadService.obtenerCatalogoUnidades().subscribe(unidades => {
      this.unidades = unidades;
    });
    this.inputBusquedaListener();
  }

  inputBusquedaListener() {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('buscar-unidad'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscaUnidad(this.terminoDeBusqueda); // Busca producto
    });
  }

  buscaUnidad(_termino_de_busqueda: string) {
    this.unidadService.buscarUnidad(_termino_de_busqueda).subscribe(data => {
      this.unidades = data;
    }).closed;
  }
}
