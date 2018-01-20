export class Modelo {
    constructor(
        public _id: number,
        public categoria: string,
        public token: string,
        public atributos: Array<String>,
        public propiedades: Array<object>
    ) { }
}
