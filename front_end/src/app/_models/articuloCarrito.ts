export class ArticuloCarrito {
    constructor(
        public _id: number,
        public nombre: string,
        public cantidad: number,
        public token: string,
        public categoria: string,
        public validacion: {
            responsable: {
                fecha: string,
                nombre: string,
                _id: string
            },
            valor: boolean
        },
        public propiedades: Array<object>
    ) { }
}
