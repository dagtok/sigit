import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario, UnidadClasificacion, Unidad } from '../_models/index';
import { UnidadService, UsuarioService } from '../_services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  accion: String;
  usuario_id: String;
  clasificacion_unidades: UnidadClasificacion[];
  usuario: Usuario;
  unidades: Unidad[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public usuarioService: UsuarioService,
    public unidadService: UnidadService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.obtenerClasificacionUnidades();
    this.obtenerAccionARealizar();
    this.toastr.setRootViewContainerRef(_vcr);
  }

  // Procesa los parametros de la URL para saber si el usuario intenta crear o editar
  obtenerAccionARealizar() {
    const tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;

    this.route.params.subscribe(params => {
      if (params.usuario_id) {
        this.usuario_id = params.usuario_id;
      }
    });

    if (tmp_accion === 'crear') {
      this.accion = 'crear';
      this.inicializarUsuario();
    } else if (tmp_accion === 'editar') {
      this.accion = 'editar';
      this.usuarioService.obtenerUsuarioPorId(this.usuario_id).subscribe(usuario => {
        this.usuario = usuario;
        this.unidadService.obtenerUnidadesPorClasificacion(usuario.unidad.clasificacion).subscribe(unidades => {
          this.unidades = unidades;
        }).closed;
      });
    } else if (tmp_accion === 'eliminar') {
      this.accion = 'eliminar';
      this.usuarioService.eliminar(this.usuario_id).subscribe(response => {
        this.router.navigate(['/admin/usuario/listar-todos']);
      });
    }
  }

  inicializarUsuario() {
    const unidad = {
      _id: null,
      clave_ur: null,
      nombre: null,
      sigla: null,
      clasificacion: null,
      direccion: null
    };
    this.usuario = new Usuario(null, null, null, null, null, unidad, null, null, null);
  }

  modificarUsuario() {
    this.usuarioService.modificarUsuario(this.usuario)
      .subscribe(
      res => {
        this.toastr.info('¡Usuario modificado con exito!.', '¡Exito!');
        //this.router.navigate(['/admin/usuario/listar-todos']);
      },
      err => {
        console.log('Error occured');
      }
      );
  }

  obtenerClasificacionUnidades() {
    this.unidadService.obtenerClasificaciones().subscribe(data => {
      this.clasificacion_unidades = data;
    }).closed;
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

    this.usuario.unidad._id = unidad._id;
    this.usuario.unidad.clave_ur = unidad.clave_ur;
    this.usuario.unidad.direccion = unidad.direccion;
    this.usuario.unidad.nombre = unidad.unidad;
    this.usuario.unidad.clasificacion = unidad.clase;
    this.usuario.unidad.sigla = unidad.sigla;

    this.usuario.tipo = 'unidad';
    this.usuario.status = 'activo';
  }

  crearUsuario() {
    this.usuarioService.crearUsuario(this.usuario).subscribe(
      res => {
        this.inicializarUsuario();
        // this.router.navigate(['/admin/usuario/listar-todos']);
        this.toastr.success('¡Usuario creado con exito!.', '¡Exito!');
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
