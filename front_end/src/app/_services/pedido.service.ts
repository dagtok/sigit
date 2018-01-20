import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Articulo, ArticuloCarrito, Categoria, Pedido } from '../_models/index';

@Injectable()
export class PedidoService {

  API_URL: string;
  articulosCarrito: Array<ArticuloCarrito>;
  constructor(private http: HttpClient) {
    this.inicializarCarrito();
    this.API_URL = 'http://104.236.191.171:8000/api/';
  }

  buscarPedido(_parametro_de_busqueda: string) {
    const parametros = new HttpParams().set('token', _parametro_de_busqueda);
    return this.http.get<Pedido[]>(this.API_URL + 'api/usuarios', { params: parametros });
  }

  inicializarCarrito() {
    this.articulosCarrito = [];
  }

  obtenerCatalogoProductos() {
    return this.http.get<Articulo[]>(this.API_URL + 'articulos');
  }

  obtenerCatalogoPedidos() {
    return this.http.get<Pedido[]>(this.API_URL + 'pedidos');
  }

  obtenerPedidosPorUnidad(_unidad_id: string) {
    // return this.http.get<Pedido[]>(this.API_URL + 'pedidos');
    const parametros = new HttpParams().set('clave_ur', _unidad_id);
    return this.http.get<Pedido[]>(this.API_URL + 'pedidos', { params: parametros });
  }

  obtenerPedidoPorId(_pedido_id: string) {
    return this.http.get<Pedido>(this.API_URL + 'pedidos/' + _pedido_id);
  }

  // Buscar producto
  buscarProductoEnCatalogo(_parametro_de_busqueda: string) {
    const parametros = new HttpParams().set('token', _parametro_de_busqueda);
    return this.http.get<Articulo[]>(this.API_URL + 'articulos', { params: parametros });
  }

  // Funcionalidades basicas de Carrito
  agregarArticuloAlCarrito(_nuevoArticulo: Articulo) {
    const articulo_carrito = new ArticuloCarrito(
      _nuevoArticulo._id,
      _nuevoArticulo.nombre,
      0,
      _nuevoArticulo.token,
      _nuevoArticulo.categoria,
      null,
      _nuevoArticulo.propiedades
    );

    if (this.verficarSiExisteEnCarrito(articulo_carrito)) {
      const posicion = this.obtenerPosicion(articulo_carrito);
      if (posicion >= 0) {
        this.articulosCarrito[posicion].cantidad += 1;
      }
    } else {
      // Agregar producto como nuevo
      articulo_carrito.cantidad = 1;
      this.articulosCarrito.push(articulo_carrito);
    }
  }
  restarArticuloACarrito(_posicion: number): void {
    if ((this.articulosCarrito[_posicion].cantidad - 1) > 0) {
      this.articulosCarrito[_posicion].cantidad -= 1;
    } else {
      this.borrarArticuloDeCarrito(_posicion);
    }
  }
  sumarArticuloACarrito(_posicion: number): void {
    this.articulosCarrito[_posicion].cantidad += 1;
  }
  verficarSiExisteEnCarrito(_productoABuscar: Articulo) {
    return this.articulosCarrito.find(function (producto) {
      return producto._id === _productoABuscar._id;
    });
  }
  obtenerPosicion(_productoABuscar: Articulo) {
    return this.articulosCarrito.findIndex(function (producto) {
      return producto._id === _productoABuscar._id;
    });
  }
  borrarArticuloDeCarrito(_posicion: number): void {
    this.articulosCarrito.splice(_posicion, 1);
  }
  registrarPedido(_pedido: Pedido) {
    return this.http.post<Pedido>(this.API_URL + 'pedidos', _pedido);
  }
}
