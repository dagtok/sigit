import { Component, OnInit } from '@angular/core';
import { Modelo } from '../modelo';
import { HttpClient } from '@angular/common/http';

// Servicio para gestion de categorias de productos
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-modelo-formulario',
  templateUrl: './modelo-formulario.component.html',
  styleUrls: ['./modelo-formulario.component.css']
})
export class ModeloFormularioComponent implements OnInit {
  
  categorias:Object;
  subcategorias:Array<String>
  propiedades:Array<Object>
  model:Modelo

  constructor(private http:HttpClient, public categoriasServicio:CategoriaService) {
    console.log("categorias");
    this.categoriasServicio.listar().subscribe(data => {
      // Read the result field from the JSON response.
      this.categorias = data;
      console.log(this.categorias[0].nombre);
    }).closed;

    this.subcategorias = ['Discos Duros Externos'];
    
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
    this.model = new Modelo(42, '', '', '',this.propiedades);
  }

  ngOnInit():void {
    // this.model = new Modelo(18, 'CCD módulo escáner 002n02346 Jc96-02759b', this.categorias[0].nombre, '', this.propiedades);
  }

    // categorias = ['CÁMARAS WEB CON MICRÓFONO', 'MÓDULO ESCANER', ' CINTA DE DATOS', ' KIT DE ACTUALIZACIÓN PARA PC'];
    
    
    submitted = false;

    onSubmit() { this.submitted = true; }
  
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
      this.model = new Modelo(42, '', '', '',null);
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
