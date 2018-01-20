import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-encabezado-usuario',
  templateUrl: './encabezado-usuario.component.html',
  styleUrls: ['./encabezado-usuario.component.css']
})
export class EncabezadoUsuarioComponent implements OnInit {
  informacion_usuario: Object;
  constructor(public autentificacionService: AuthenticationService) {
    this.informacion_usuario = this.autentificacionService.getUserInfo(); // Obtiene informacion del local storage
    // console.log(informacion_usuario);
  }

  ngOnInit() {
  }

}
