export class Articulo {
    constructor(
        public _id: number,
        public nombre: string,
        public token: string,
        public categoria: string,
        // public validacion:object,
        public propiedades: Array<object>,
    ) { }
}
