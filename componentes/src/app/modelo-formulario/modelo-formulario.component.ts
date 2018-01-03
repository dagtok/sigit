import { Component, OnInit } from '@angular/core';

import { Modelo, Categoria } from '../_models/index';
import { CategoriaService, ModeloService } from '../_services/index';

@Component({
  // selector: 'app-modelo-formulario',
  moduleId: module.id.toString(),
  templateUrl: './modelo-formulario.component.html',
  styleUrls: ['./modelo-formulario.component.css']
})

export class ModeloFormularioComponent implements OnInit {
  categorias: Array<Categoria>;
  propiedades: Array<Object>;
  atributos: Array<String>;
  model: Modelo;
  submitted: Boolean = false;

  constructor(public categoriaServicio: CategoriaService, public modeloServicio: ModeloService) {
    this.cargarCategorias();
    this.generarNuevoModelo();
  }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    //alert('Enviar formato a registrar!');
    //this.crearCategoria(this.model);
  }

  cargarCategorias() {
    this.categoriaServicio.listar().subscribe(data => {
      this.categorias = data;
    }).closed;
  }

  /*
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
  */

  generarNuevoModelo() {
    this.atributos = [];
    this.propiedades = [];
    this.model = new Modelo(null, '', '', this.atributos, this.propiedades);
  }

  asignarTokenACategoria(_valor_atributo: string) {
    this.model.token = _valor_atributo.replace(/[^\w\s]/gi, '')
      .toLowerCase().replace(/ /g, '')
      .replace(/[aeiou]/ig, '')
      .replace(/[0123456789_]/ig, '');
  }

  actualizarTokenAtributo(_valor_atributo: string, _posicion: number) {
    this.propiedades[_posicion]['token'] = this.generarToken(_valor_atributo);
  }

  crearCategoria() {

    this.modeloServicio.crearCategoria(this.model)
      .subscribe(
      res => {
        console.log(res);
        this.generarNuevoModelo();
        this.onSubmit();
      },
      err => {
        console.log("Error occured");
      }
      );
  }

  generarToken(_atributo: string): string {
    console.log("_atributo");
    console.log(_atributo);

    if (_atributo != null) {
      let r = _atributo.toLowerCase().split(' ').join('-');
      r = r.replace(/[`~!@#$%^&*()_|+\=?;:'",.´·<>\{\}\[\]\\\/]/gi, '');
      r = r.replace(new RegExp(/\s/g), "");
      r = r.replace(new RegExp(/[àáâãäå]/g), "a");
      r = r.replace(new RegExp(/æ/g), "ae");
      r = r.replace(new RegExp(/ç/g), "c");
      r = r.replace(new RegExp(/[èéêë]/g), "e");
      r = r.replace(new RegExp(/[ìíîï]/g), "i");
      r = r.replace(new RegExp(/ñ/g), "n");
      r = r.replace(new RegExp(/[òóôõö]/g), "o");
      r = r.replace(new RegExp(/œ/g), "oe");
      r = r.replace(new RegExp(/[ùúûü]/g), "u");
      r = r.replace(new RegExp(/[ýÿ]/g), "y");
      r = r.replace(/[0123456789]/ig, '');
      // r = r.replace(new RegExp(/\W/g),""); // Quitar todos los espacios
      return r;
    }
    return null;
  }

  buscarAtributo(_atributo: string) {
    _atributo = this.generarToken(_atributo);

    var indice = this.model.atributos.indexOf(_atributo); //Valor 
    if ((indice > -1) == true) { // Si el atributo exite 
      // console.log("Borrando el atributo deseado");
      this.model.atributos.splice(indice, 1);
    }
  }

  agregarAtributo(_atributo: string) {
    _atributo = this.generarToken(_atributo);
    var indice = this.model.atributos.indexOf(_atributo); //Valor 
    if ((indice > -1) == false) { // Si el atributo no exite 
      this.model.atributos.push(_atributo);
    }
  }

  agregarNuevaPropiedad() {
    var nuevo_atributo = {
      "nombre": null,
      "token": null
    };
    this.propiedades.push(nuevo_atributo);
  }

  borrarPropiedad(indice: number) {
    // alert("Borrando propiedad " + indice);
    this.propiedades.splice(indice, 1);
  }

}
