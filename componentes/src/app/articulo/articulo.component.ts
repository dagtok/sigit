import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Servicio para gestion de categorias de productos
import { CategoriaService,SubcategoriaService } from '../_services/index';
import { Articulo } from '../_models/index';

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
          "texto": "Capacidad",
          "nombre": "capacidad",
          "valor": null
        },
        {
          "texto": "Tecnología de grabación",
          "nombre": "tecnologia-de-grabacion",
          "valor": null
        },
        {
          "texto": "Velocidad de lectura",
          "nombre": "velocidad-de-lectura",
          "valor": null
        },
        {
          "texto": "Longitud de la cinta",
          "nombre": "longitud-de-la-cinta",
          "valor": null
        },
        {
          "texto": "Ancho de la cinta",
          "nombre": "ancho-de-la-cinta",
          "valor": null
        },
        {
          "texto": "Grosor de la cinta",
          "nombre": "grosor-de-la-cinta",
          "valor": null
        },
        {
          "texto": "Formato de soporte",
          "nombre": "formato-de-soporte",
          "valor": null
        }
      ];

    this.articulo = new Articulo(42,'Este es un nombre','este-es-un-nombre',"CINTA DE DATOS","KIT DE ACTUALIZACIÓN PARA PC",propiedades);
  }

  ngOnInit() {
  }

  asignarTokenAlNombre(_valor_atributo : string) {
    this.articulo.token = this.generarToken( _valor_atributo );
  }

  asignarValorDeAtributo(_valor_atributo : string, _posicion:number ) {
    this.articulo.propiedades[_posicion]["valor"] = _valor_atributo;
    this.articulo.propiedades[_posicion]["token"] = this.generarToken( _valor_atributo );
  }

  generarToken( _valor_atributo : string ){
    return _valor_atributo.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'').replace(/[aeiou]/ig,'');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }
  agregarToken(){
    //buscar si existe token
    // Si no existe hacer push 
  }
  agregarAtributo(){
    //buscar si existe token
    // Si no existe hacer push 
  }
}
