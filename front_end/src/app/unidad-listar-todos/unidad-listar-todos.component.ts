import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'app/_services';
import { Unidad } from 'app/_models';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-unidad-listar-todos',
  templateUrl: './unidad-listar-todos.component.html',
  styleUrls: ['./unidad-listar-todos.component.css']
})
export class UnidadListarTodosComponent implements OnInit {
  unidades: Unidad[];
  terminoDeBusqueda: string;

  constructor(public unidadService: UnidadService) {
    this.unidadService.obtenerCatalogoUnidades().subscribe(unidades => {
      this.unidades = unidades;
    });
  }

  ngOnInit() {
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
    const token = this.generarToken(_termino_de_busqueda);
    this.unidadService.buscarUnidad(token).subscribe(data => {
      this.unidades = data;
    }).closed;
  }

  generarToken(_termino_de_busqueda: string) {
    return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

}
