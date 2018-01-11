import { Component, OnInit } from '@angular/core';

import { Usuario, UnidadClasificacion, Unidad } from '../_models/index';
import { UnidadService, UsuarioService } from '../_services/index';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  clasificacion_unidades: UnidadClasificacion[];
  usuario: Usuario;
  unidades: Unidad[];

  constructor(public usuarioService: UsuarioService, public unidadService: UnidadService) {
    this.obtenerClasificacionUnidades();
    this.inicializarUsuario();
  }

  inicializarUsuario() {
    const unidad = {
      _id: null,
      clave_ur: null,
      nombre: null,
      sigla: null,
      direccion: null
    };
    this.usuario = new Usuario(null, null, null, null, null, unidad, null, null);
  }

  obtenerClasificacionUnidades() {
    this.unidadService.obtenerClasificaciones().subscribe(data => {
      this.clasificacion_unidades = data;
    }).closed;
  }

  obtenerUnidadesPorClasificacion(_clasificacion) {
    const index = _clasificacion.target.selectedIndex;
    const clasificacion = this.clasificacion_unidades[index].clasificacion;
    console.log(clasificacion);

    this.unidadService.obtenerUnidadesPorClasificacion(clasificacion).subscribe(modelo => {
      // this.articulo = new Articulo(null, null, null, modelo.categoria, modelo.propiedades);
      this.unidades = modelo;
    }).closed;

  }

  asignarUnidadAUsuario(_unidad_event) {
    const index = _unidad_event.target.selectedIndex;
    const unidad: Unidad = this.unidades[index];

    this.usuario.unidad.clave_ur = unidad.clave_ur;
    this.usuario.unidad.direccion = '';
    this.usuario.unidad.nombre = unidad.unidad;
    this.usuario.unidad.sigla = unidad.sigla;

    this.usuario.tipo = 'unidad';
    this.usuario.status = 'activo';
  }
  crearUsuario() {
    this.usuarioService.crearUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        this.inicializarUsuario();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
