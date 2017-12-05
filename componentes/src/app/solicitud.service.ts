import { Injectable } from '@angular/core';

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
    if(this.articulos.length > 0){
      return this.articulos;
    } else {
      return false;
    }
  }

}
