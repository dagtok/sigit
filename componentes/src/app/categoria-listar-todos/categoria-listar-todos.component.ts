import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../_services/index';
import { Modelo } from 'app/_models';
@Component({
  selector: 'app-categoria-listar-todos',
  templateUrl: './categoria-listar-todos.component.html',
  styleUrls: ['./categoria-listar-todos.component.css']
})
export class CategoriaListarTodosComponent implements OnInit {
  categorias: Modelo[];
  constructor(public categoriaService: ModeloService) {
    this.categoriaService.obtenerCatalogoCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  ngOnInit() {
  }

}
