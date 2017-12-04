import { Component, OnInit } from '@angular/core';
import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public librosSeleccionados:LibrosSeleccionadosService) {
    
   }

  ngOnInit() {
  }

}
