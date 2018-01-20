import { ArticuloCarrito } from 'app/_models';
export class Pedido {
    constructor(
        public _id: string,
        public estado: string,
        public unidad: object,
        public elaboro: object,
        public autorizo: object,
        public articulos: Array<ArticuloCarrito>
    ) {  }
}
