export class Categoria {
    constructor(
        public _id: number,
        public nombre: string
    ) {  }
}import { Injectable } from '@angular/core';

@Injectable()
export class SolicitudService {

  articulos:Array<Object>
  
  constructor() { 
    this.articulos = [];
  }
  
  agregarArticulo(_nuevoArticulo){
    this.articulos.push(_nuevoArticulo);
  }
  
  mostrarArticulos(){
    /**/
  }

}