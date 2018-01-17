export class Usuario {
    constructor(
        public _id: string,
        public nombre: string,
        public usuario: string,
        public password: string,
        public email: string,
        public unidad: {
            _id: string,
            clave_ur: string,
            nombre: string,
            sigla: string,
            clasificacion: string,
            direccion: string,
        },
        public tipo: string,
        public status: string,
        public no_pedidos: number
    ) { }
}
