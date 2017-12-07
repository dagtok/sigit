import { Component, OnInit } from '@angular/core';
import { Modelo }    from '../modelo';
@Component({
  selector: 'app-modelo-formulario',
  templateUrl: './modelo-formulario.component.html',
  styleUrls: ['./modelo-formulario.component.css']
})
export class ModeloFormularioComponent implements OnInit {
    constructor() { }
  
    ngOnInit() {    
    }

    categorias = ['CÁMARAS WEB CON MICRÓFONO', 'MÓDULO ESCANER', ' CINTA DE DATOS', ' KIT DE ACTUALIZACIÓN PARA PC'];
    
    subcategorias = ['Discos Duros Externos'];
    
    propiedades:Array<object> = [
      { "atributo":'Capacidad'},
      { "atributo":'Tecnología de grabación'},
      { "atributo":'Velocidad de lectura'},
      { "atributo":'Longitud de cinta'},
      { "atributo":'Ancho de cinta'},
      { "atributo":'Grosor de cinta'},
      { "atributo":'Formato de soporte'},
      { "atributo":'Vida del archivo'},
      { "atributo":'Peso'},
    ];

    model = new Modelo(18, 'CCD módulo escáner 002n02346 Jc96-02759b', this.categorias[0], this.subcategorias[0], this.propiedades);
    submitted = false;

    onSubmit() { this.submitted = true; }
  
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
      this.model = new Modelo(42, '', '', '',null);
    }

    agregarPropiedad(){
      var nuevo_atributo = {
        "atributo":null
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
