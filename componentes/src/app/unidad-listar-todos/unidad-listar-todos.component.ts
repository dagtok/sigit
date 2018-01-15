import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'app/_services';
import { Unidad } from 'app/_models';

@Component({
  selector: 'app-unidad-listar-todos',
  templateUrl: './unidad-listar-todos.component.html',
  styleUrls: ['./unidad-listar-todos.component.css']
})
export class UnidadListarTodosComponent implements OnInit {
  unidades: Unidad[];
  constructor(public unidadService: UnidadService) {
    this.unidadService.obtenerCatalogoUnidades().subscribe(unidades => {
      this.unidades = unidades;
    });
  }

  ngOnInit() { }

}
