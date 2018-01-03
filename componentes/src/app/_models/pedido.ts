export class Pedido {
    constructor(
        public _id: number,
        public estado: string,
        public unidad: object,
        public elaboro: object,
        public autorizo: object,
        public articulos: object
    ) {  }
}
