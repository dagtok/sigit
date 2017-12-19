import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categoria } from './categoria';

@Injectable()
export class SolicitudService {

  URL:string;
  articulos:Array<Object>;
  
  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:4200/assets/json/articulos.json';
  }

  obtenerCatalogoProductos(){
    return this.http.get(this.URL);
  }

  //Buscar producto
  buscarProducto(_parametro:string){
    this.obtenerCategorias(_parametro);
    this.obtenerSubCategorias(_parametro);
    this.obtenerProductos(_parametro);
  }
  
  obtenerCategorias(_parametro:string){
    return this.http.get(this.URL);
  }

  obtenerSubCategorias(_parametro:string){
    return this.http.get(this.URL);
  }

  obtenerProductos(_parametro:string){
    return this.http.get(this.URL);
  }

  agregarArticulo(_nuevoArticulo){
    this.articulos.push(_nuevoArticulo);
  }
}