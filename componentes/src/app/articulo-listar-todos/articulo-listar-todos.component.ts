import { Component, OnInit } from '@angular/core';

import { ArticuloService } from '../_services/index';
import { Articulo } from 'app/_models';

@Component({
  selector: 'app-articulo-listar-todos',
  templateUrl: './articulo-listar-todos.component.html',
  styleUrls: ['./articulo-listar-todos.component.css']
})
export class ArticuloListarTodosComponent implements OnInit {
  articulos: Articulo[];
  constructor(public articuloService: ArticuloService) { }

  ngOnInit() {
    this.articuloService.obtenerCatalogoArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });
  }

}
