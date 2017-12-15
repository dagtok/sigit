export class Modelo {
    constructor(
        public id: number,
        public categoria: string,
        public subcategoria: string,
        public atributos:Array<String>,
        public propiedades:Array<object>
    ) {  }
}
