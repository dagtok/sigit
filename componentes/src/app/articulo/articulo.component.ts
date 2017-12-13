import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriaService } from '../categoria.service'; // Servicio para gestion de categorias de productos
import { SubcategoriaService } from '../subcategoria.service';

import { Articulo } from '../articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulo:Articulo;
  categorias:Object;
  subcategorias:Object;

  constructor(public categoriasServicio:CategoriaService, public subcategoriasServicio:SubcategoriaService) {
    this.categoriasServicio.listar().subscribe(data => {
      this.categorias = data;
    }).closed;

    this.categoriasServicio.listar().subscribe(data => {
      this.subcategorias = data;
    }).closed;

    var propiedades = [
      {
        "nombre": "Capacidad",
        "nombre-db": "capacidad",
        "valor": null
      },
      {
        "nombre": "Tecnología de grabación",
        "nombre-db": "tecnologia-de-grabacion",
        "valor": null
      },
      {
        "nombre": "Velocidad de lectura",
        "nombre-db": "velocidad-de-lectura",
        "valor": null
      },
      {
        "nombre": "Longitud de la cinta",
        "nombre-db": "longitud-de-la-cinta",
        "valor": null
      },
      {
        "nombre": "Ancho de la cinta",
        "nombre-db": "ancho-de-la-cinta",
        "valor": null
      },
      {
        "nombre": "Grosor de la cinta",
        "nombre-db": "grosor-de-la-cinta",
        "valor": null
      },
      {
        "nombre": "Formato de soporte",
        "nombre-db": "formato-de-soporte",
        "valor": null
      }
    ];

    this.articulo = new Articulo(42,'',"CINTA DE DATOS","CINTA DE DATOS",propiedades);
   }

  ngOnInit() {
  }

  asignarValorDeAtributo(_valor_atributo : string, _posicion:number ) {  
    this.articulo.propiedades[_posicion]["valor"] = _valor_atributo;
  }
}
