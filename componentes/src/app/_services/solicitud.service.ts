import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo, ArticuloCarrito, Categoria } from '../_models/index';

@Injectable()
export class SolicitudService {

  API_URL: string;
  articulosCarrito:Array<ArticuloCarrito>;
  constructor(private http: HttpClient) {
    this.articulosCarrito = [];
    this.API_URL = 'http://localhost:4200/assets/json/';
  }

  obtenerCatalogoProductos(){
    return this.http.get<Articulo[]>(this.API_URL + 'articulos.json');
  }

  //Buscar producto
  buscarProductoEnCatalogo(_parametroBusqueda: string){
    //this.obtenerCategorias(_parametroBusqueda);
    //this.obtenerSubCategorias(_parametroBusqueda);
    //this.obtenerProductos(_parametroBusqueda);
    return this.http.get<Articulo[]>(this.API_URL + 'articulos-2.json');
  }
  // obtenerCategorias(_parametroBusqueda: string){
    // return this.http.get(this.API_URL);
  // }

  // obtenerSubCategorias(_parametroBusqueda: string){
    // return this.http.get(this.API_URL);
  // }

  // obtenerProductos(_parametroBusqueda: string){
    // return this.http.get(this.API_URL);
  // }
  // Funcionalidades basicas de Carrito
  agregarArticuloAlCarrito(_nuevoArticulo:Articulo){
    const articulo_carrito = new ArticuloCarrito(
                        _nuevoArticulo._id,
                        _nuevoArticulo.nombre,
                        0,
                        _nuevoArticulo.token,
                        _nuevoArticulo.categoria,
                        _nuevoArticulo.subcategoria,
                        _nuevoArticulo.propiedades
                      );

    if( this.verficarSiExisteEnCarrito(articulo_carrito) ) {
      const posicion = this.obtenerPosicion(articulo_carrito);
      if( posicion >= 0 ) {
        this.articulosCarrito[posicion].cantidad += 1;
      }
    } else {
      // Agregar producto como nuevo
      articulo_carrito.cantidad = 1;
      this.articulosCarrito.push(articulo_carrito);
    }
  }
  restarArticuloACarrito(_posicion: number): void{
    if((this.articulosCarrito[_posicion].cantidad-1) > 0){
      this.articulosCarrito[_posicion].cantidad -= 1;
    } else {
      this.borrarArticuloDeCarrito(_posicion);
    }
  }
  sumarArticuloACarrito(_posicion: number): void{
    this.articulosCarrito[_posicion].cantidad += 1;
  }
  verficarSiExisteEnCarrito(_productoABuscar:Articulo){
    return this.articulosCarrito.find(function( producto ) {
      return producto._id === _productoABuscar._id;
    });
  }
  obtenerPosicion(_productoABuscar:Articulo){
    return this.articulosCarrito.findIndex(function( producto ) {
      return producto._id === _productoABuscar._id;
    });
  }
  borrarArticuloDeCarrito(_posicion:number):void{
    this.articulosCarrito.splice(_posicion, 1);
  }
  // borrar esto
  ejemploArray(){
    /*
    this.http.get(this.apiAllUrl)
    .map((res: Response) => res.json())
    .subscribe(
        data => {
            this.nrs = data.map(nrObj => nrObj.number)
        },
    );
    */
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
}
