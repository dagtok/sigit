import { Component, OnInit } from '@angular/core';
import { Modelo } from '../modelo';
import { CategoriaService } from '../categoria.service'; // Servicio para gestion de categorias de productos
import { SubcategoriaService } from '../subcategoria.service';

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
    this.categoriasServicio.listar().subscribe(data => {
      this.categorias = data;
    }).closed;

    this.categoriasServicio.listar().subscribe(data => {
      this.subcategorias = data;
    }).closed;
    this.atributos = [
      'Capacidad',
      'Tecnología de grabación',
      'Velocidad de lectura',
      'Longitud de cinta',
      'Ancho de cinta',
      'Grosor de cinta',
      'Formato de soporte',
      'Vida del archivo',
      'Peso'
    ];
    this.propiedades = [
      { "nombre":'Capacidad'},
      { "nombre":'Tecnología de grabación'},
      { "nombre":'Velocidad de lectura'},
      { "nombre":'Longitud de cinta'},
      { "nombre":'Ancho de cinta'},
      { "nombre":'Grosor de cinta'},
      { "nombre":'Formato de soporte'},
      { "nombre":'Vida del archivo'},
      { "nombre":'Peso'},
    ];
    this.model = new Modelo(42, 'CINTA DE DATOS', '', this.atributos, this.propiedades);
  }

  ngOnInit() { }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
      this.model = new Modelo(42, '', '',null,null);
  }

  enCambioDeAtributo(_valor_atributo : string, _posicion:number ) {  
    var r= _valor_atributo.toLowerCase().split(' ').join('-');
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
    // r = r.replace(new RegExp(/\W/g),"");

    this.propiedades[_posicion]["nombre-db"] = r;
  }
  buscarAtributo(_valor){
    console.log("Buscando"+_valor);
    if((this.model.atributos.indexOf(_valor) > -1) == false){ // Si el atributo no exite 
      console.log("Valor no encontrado");
      this.model.atributos.push(_valor)
    }
  }
  agregarPropiedad(){
    var nuevo_atributo = {
      "nombre":null,
      "nombre-db": null
    };
    this.propiedades.push(nuevo_atributo);
  }

    borrarPropiedad(indice:number){
      // alert("Borrando propiedad " + indice);
      this.propiedades.splice(indice,1);
    }

    trackByFn(index: any, item: any) {
      return index;
   }
}
