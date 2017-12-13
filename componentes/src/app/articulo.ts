export class Articulo {
    constructor(
        public _id: number,
        public nombre: string,
        public categoria: string,
        public subcategoria: string,
        public propiedades:Array<object>
    ){ }
}