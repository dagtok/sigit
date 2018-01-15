import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Unidad, UnidadClasificacion } from '../_models/index';
import { UnidadService } from '../_services/index';


@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  // export class UnidadComponent implements OnInit {
  accion: String;
  unidad_id: String;
  clasificacion_unidades: UnidadClasificacion[];
  unidad: Unidad;
  unidades: Unidad[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public unidadService: UnidadService) {
    this.obtenerClasificacionUnidades();
    this.obtenerAccionARealizar();
  }
  obtenerClasificacionUnidades() {
    this.unidadService.obtenerClasificaciones().subscribe(data => {
      this.clasificacion_unidades = data;
    }).closed;
  }
  // Procesa los parametros de la URL para saber si el unidad intenta crear o editar
  obtenerAccionARealizar() {
    const tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;

    this.route.params.subscribe(params => {
      if (params.unidad_id) {
        this.unidad_id = params.unidad_id;
      }
    });

    if (tmp_accion === 'crear') {
      this.accion = 'crear';
      this.inicializarUnidad();
    } else if (tmp_accion === 'editar') {
      this.accion = 'editar';
      this.unidadService.obtenerUnidadPorId(this.unidad_id).subscribe(unidad => {
        this.unidad = unidad;
        this.unidadService.obtenerUnidadesPorClasificacion(unidad.clase).subscribe(unidades => {
          this.unidades = unidades;
        }).closed;
      });
    } else if (tmp_accion === 'eliminar') {
      this.accion = 'eliminar';
      this.unidadService.eliminar(this.unidad_id).subscribe(response => {
        this.router.navigate(['/admin/unidad/listar-todos']);
      });
    }
  }

  inicializarUnidad() {
    this.unidad = new Unidad(null, null, null, null, null, null, null, null);
  }

  obtenerUnidadesPorClasificacion(_clasificacion) {
    const index = _clasificacion.target.selectedIndex;
    const clasificacion = this.clasificacion_unidades[index].clasificacion;

    this.unidadService.obtenerUnidadesPorClasificacion(clasificacion).subscribe(unidades => {
      this.unidades = unidades;
    }).closed;

  }

  asignarUnidadAUsuario(_unidad_event) {
    const index = _unidad_event.target.selectedIndex;
    const unidad: Unidad = this.unidades[index];
    //console.log(unidad);
    this.unidad._id = unidad._id;
    this.unidad.clave_ur = unidad.clave_ur;
    this.unidad.unidad = unidad.unidad;
    this.unidad.sigla = unidad.sigla;
    this.unidad.clase_global = unidad.clase_global;
    this.unidad.clase = unidad.clase;
    this.unidad.clasificacion = unidad.clasificacion;
    this.unidad.direccion = unidad.direccion;
  }

  modificarUnidad() {
    this.unidadService.modificarUnidad(this.unidad)
      .subscribe(
        res => {
          this.router.navigate(['/admin/unidad/listar-todos']);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  /*
  asignarUnidadAUnidad(_unidad_event) {
    const index = _unidad_event.target.selectedIndex;
    const unidad: Unidad = this.unidades[index];
    //console.log(unidad);
    this.unidad.unidad._id = unidad._id;
    this.unidad.unidad.clave_ur = unidad.clave_ur;
    this.unidad.unidad.direccion = '';
    this.unidad.unidad.nombre = unidad.unidad;
    this.unidad.unidad.clasificacion = unidad.clase;
    this.unidad.unidad.sigla = unidad.sigla;

    this.unidad.tipo = 'unidad';
    this.unidad.status = 'activo';
  }
  */
  crearUnidad() {
    this.unidadService.crearUnidad(this.unidad).subscribe(
      res => {
        console.log(res);
        this.inicializarUnidad();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
