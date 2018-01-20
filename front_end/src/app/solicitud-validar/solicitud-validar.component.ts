import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SolicitudValidarService, AuthenticationService } from 'app/_services';
import { Pedido, Usuario } from 'app/_models';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-solicitud-validar',
  templateUrl: './solicitud-validar.component.html',
  styleUrls: ['./solicitud-validar.component.css']
})
export class SolicitudValidarComponent implements OnInit {
  pedido_id: string;
  pedido: Pedido;
  responsable: Usuario;
  porcentaje_validacion: number;
  no_articulos_validados: number;

  constructor(private ruta: ActivatedRoute,
    private router: Router,
    private solicitudValidarService: SolicitudValidarService,
    public autentificacionService: AuthenticationService) {

    this.porcentaje_validacion = 0;

    // Obtiene los datos del pedido indicado en la URL
    this.ruta.params.subscribe(params => {
      this.pedido_id = params['pedido_id'];
      this.solicitudValidarService.buscarPedido(this.pedido_id).subscribe(data => {
        this.pedido = data;
        this.responsable = this.autentificacionService.getUserInfo();
        this.pedido.autorizo = {
          '_id': this.responsable._id,
          'nombre': this.responsable.nombre,
          'fecha': new Date()
        };
        this.actualizarPorcentajeDeProgreso();
      });
    });
  }
  ngOnInit() {
  }

  aprobarArticulo(indice_articulo: number) {
    // console.log(_event.target);
    // console.log(this.responsable);

    this.pedido.articulos[indice_articulo].validacion = {
      valor: true,
      responsable: {
        _id: this.responsable._id,
        nombre: this.responsable.nombre,
        fecha: new Date().toDateString()
      }
    };
    this.actualizarPorcentajeDeProgreso();
  }

  rechazarArticulo(indice_articulo: number) {
    this.pedido.articulos[indice_articulo].validacion = {
      valor: false,
      responsable: {
        _id: this.responsable._id,
        nombre: this.responsable.nombre,
        fecha: new Date().toDateString()
      }
    };
    this.actualizarPorcentajeDeProgreso();
  }

  validarPedido() {
    // console.log("El pedido antes de enviar");
    // console.log(this.pedido);
    this.solicitudValidarService.validarPedido(this.pedido)
      .subscribe(response => {
        //console.log("La respuesta");
        // console.log(response);
        this.router.navigate(['/solicitudes']);
      });
  }

  actualizarPorcentajeDeProgreso() {
    const no_articulos = this.pedido.articulos.length;
    this.no_articulos_validados = 0;
    for (let _i = 0; _i < no_articulos; _i++) {
      if (this.pedido.articulos[_i].validacion) {
        this.no_articulos_validados++;
      }
    }
    this.porcentaje_validacion = Math.round((this.no_articulos_validados * 100) / no_articulos);
  }
  validarSolicitud() {
    this.pedido.autorizo = {
      _id: null,
      nombre: null,
      fecha: null
    };
  }
}
