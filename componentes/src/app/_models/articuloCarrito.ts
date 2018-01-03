export class ArticuloCarrito {
    constructor(
        public _id: number,
        public nombre: string,
        public cantidad: number,
        public token: string,
        public categoria: string,
        public propiedades:Array<object>
    ){ }
}