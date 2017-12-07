export class Modelo {
    constructor(
        public id: number,
        public nombre: string,
        public categoria: string,
        public subcategoria: string,
        public propiedades:Array<object>
    ) {  }
}
