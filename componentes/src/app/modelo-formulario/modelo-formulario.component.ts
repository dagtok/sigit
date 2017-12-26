import { Component, OnInit } from '@angular/core';
import { Modelo } from '../_models/index';
import { CategoriaService,SubcategoriaService } from '../_services/index';

@Component({
  selector: 'app-modelo-formulario',
  templateUrl: './modelo-formulario.component.html',
  styleUrls: ['./modelo-formulario.component.css']
})
export class ModeloFormularioComponent implements OnInit {
  
  categorias:Object;
  subcategorias:Object;
  propiedades:Array<Object>;
  atributos:Array<String>;
  model:Modelo;

  constructor(public categoriasServicio:CategoriaService, public subcategoriasServicio:SubcategoriaService) {
    
    this.cargarCategorias();
    /*
    this.atributos = [
      "capacidad",
      "tecnología-de-grabación",
      "velocidad-de-lectura",
      "longitud-de-cinta",
      "ancho-de-cinta",
      "grosor-de-cinta",
      "formato-de-soporte",
      "vida-del-archivo",
      "peso"
    ];

    this.propiedades = [
      {
        "nombre": "Capacidad",
        "token": "capacidad"
      },
      {
        "nombre": "Tecnología de grabación",
        "token": "tecnología-de-grabación"
      },
      {
        "nombre": "Velocidad de lectura",
        "token": "velocidad-de-lectura"
      },
      {
        "nombre": "Longitud de cinta",
        "token": "longitud-de-cinta"
      },
      {
        "nombre": "Ancho de cinta",
        "token": "ancho-de-cinta"
      },
      {
        "nombre": "Grosor de cinta",
        "token": "grosor-de-cinta"
      },
      {
        "nombre": "Formato de soporte",
        "token": "formato-de-soporte"
      },
      {
        "nombre": "Vida del archivo",
        "token": "vida-del-archivo"
      },
      {
        "nombre": "Peso",
        "token": "peso"
      }
    ];
    */

    this.atributos = [];
    this.propiedades = [];
    this.model = new Modelo(42, '', '', this.atributos, this.propiedades);
    // this.model = new Modelo(42, 'CINTA DE DATOS', 'KIT DE ACTUALIZACIÓN PARA PC', this.atributos, this.propiedades);
  }

  ngOnInit() { }
  
  submitted = false;

  onSubmit() { this.submitted = true; }

  cargarCategorias(){
    this.categoriasServicio.listar().subscribe(data => {
      this.categorias = data;
    }).closed;

    this.categoriasServicio.listar().subscribe(data => {
      this.subcategorias = data;
    }).closed;
  }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  generarNuevoModelo() {
      this.model = new Modelo(42, '', '',[],[]);
  }

  actualizarTokenAtributo(_valor_atributo : string, _posicion:number ) {  
    this.propiedades[_posicion]["token"] = this.generarToken(_valor_atributo);
  }

  generarToken(_atributo:string):string{
    console.log("_atributo");
    console.log(_atributo);

    if (_atributo != null) {
      var r= _atributo.toLowerCase().split(' ').join('-');
      r = r.replace(/[`~!@#$%^&*()_|+\=?;:'",.´·<>\{\}\[\]\\\/]/gi, '');
      r = r.replace(new RegExp(/\s/g),"");
      r = r.replace(new RegExp(/[àáâãäå]/g),"a");
      r = r.replace(new RegExp(/æ/g),"ae");
      r = r.replace(new RegExp(/ç/g),"c");
      r = r.replace(new RegExp(/[èéêë]/g),"e");
      r = r.replace(new RegExp(/[ìíîï]/g),"i");
      r = r.replace(new RegExp(/ñ/g),"n");
      r = r.replace(new RegExp(/[òóôõö]/g),"o");
      r = r.replace(new RegExp(/œ/g),"oe");
      r = r.replace(new RegExp(/[ùúûü]/g),"u");
      r = r.replace(new RegExp(/[ýÿ]/g),"y");
      r = r.replace(/[0123456789]/ig,'');
      // r = r.replace(new RegExp(/\W/g),""); // Quitar todos los espacios
      return r;
    }
    return null;
  }

  buscarAtributo(_atributo:string){
    _atributo = this.generarToken(_atributo);

    var indice = this.model.atributos.indexOf(_atributo); //Valor 
    if((indice > -1) == true){ // Si el atributo exite 
      // console.log("Borrando el atributo deseado");
      this.model.atributos.splice(indice, 1);
    }
  }
  
  agregarAtributo(_atributo:string){
    _atributo = this.generarToken(_atributo);
    var indice = this.model.atributos.indexOf(_atributo); //Valor 
    if((indice > -1) == false){ // Si el atributo no exite 
      this.model.atributos.push(_atributo);
    }
  }

  agregarNuevaPropiedad(){
    var nuevo_atributo = {
      "nombre":null,
      "token": null
    };
    this.propiedades.push(nuevo_atributo);
  }
  
  borrarPropiedad(indice:number){
    // alert("Borrando propiedad " + indice);
    this.propiedades.splice(indice,1);
  }

}
