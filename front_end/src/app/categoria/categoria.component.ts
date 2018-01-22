import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Modelo, Categoria } from '../_models/index';
import { CategoriaService } from '../_services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  accion: String;
  categoria_id: String;
  propiedades: Array<Object>;
  atributos: Array<String>;
  model: Modelo;
  submitted: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public categoriaServicio: CategoriaService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.obtenerAccionARealizar();
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Procesa los parametros de la URL para saber si el usuario intenta crear o editar
  obtenerAccionARealizar() {
    const tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;

    this.route.params.subscribe(params => {
      if (params.categoria_id) {
        this.categoria_id = params.categoria_id;
      }
    });

    if (tmp_accion === 'crear') {
      this.accion = 'crear';
      this.inicializarCategoria();
    } else if (tmp_accion === 'editar') {
      this.accion = 'editar';
      this.categoriaServicio.obtenerCategoriaPorId(this.categoria_id).subscribe(categoria => {
        this.model = categoria;
      });
    } else if (tmp_accion === 'eliminar') {
      this.accion = 'eliminar';
      this.categoriaServicio.eliminar(this.categoria_id).subscribe(response => {
        this.router.navigate(['/admin/categoria/listar-todos']).then(result => {
          this.toastr.info('¡El usuario fue eliminado!.', null);
        });
      });
    }
  }

  inicializarCategoria() {
    this.atributos = [];
    this.propiedades = [];
    this.model = new Modelo(null, '', '', this.atributos, this.propiedades);
  }

  asignarTokenACategoria(_valor_atributo: string) {
    if (_valor_atributo && _valor_atributo.length > 0) {
      this.model.token = _valor_atributo.replace(/[^\w\s]/gi, '')
        .toLowerCase().replace(/ /g, '')
        .replace(/[aeiou]/ig, '')
        .replace(/[0123456789_]/ig, '');
    }
  }

  actualizarTokenAtributo(_valor_atributo: string, _posicion: number) {
    this.model.propiedades[_posicion]['token'] = this.generarToken(_valor_atributo);
  }

  modificarCategoria() {
    this.categoriaServicio.modificarCategoria(this.model)
      .subscribe(
      res => {
        this.router.navigate(['/admin/categoria/listar-todos']).then(result => {
          this.toastr.info('¡La categoria fue modificada con exito!.', null);
        });
      },
      err => {
        console.log('Error occured');
      }
      );
  }

  crearCategoria() {

    this.categoriaServicio.crearCategoria(this.model)
      .subscribe(
      res => {
        this.inicializarCategoria();
        this.router.navigate(['/admin/categoria/listar-todos']);
      },
      err => {
        console.log('Error occured');
      }
      );
  }

  generarToken(_atributo: string): string {
    if (_atributo != null) {
      let r = _atributo.toLowerCase().split(' ').join('-');
      r = r.replace(/[`~!@#$%^&*()_|+\=?;:'",.´·<>\{\}\[\]\\\/]/gi, '');
      r = r.replace(new RegExp(/\s/g), '');
      r = r.replace(new RegExp(/[àáâãäå]/g), 'a');
      r = r.replace(new RegExp(/æ/g), 'ae');
      r = r.replace(new RegExp(/ç/g), 'c');
      r = r.replace(new RegExp(/[èéêë]/g), 'e');
      r = r.replace(new RegExp(/[ìíîï]/g), 'i');
      r = r.replace(new RegExp(/ñ/g), 'n');
      r = r.replace(new RegExp(/[òóôõö]/g), 'o');
      r = r.replace(new RegExp(/œ/g), 'oe');
      r = r.replace(new RegExp(/[ùúûü]/g), 'u');
      r = r.replace(new RegExp(/[ýÿ]/g), 'y');
      r = r.replace(/[0123456789]/ig, '');
      // r = r.replace(new RegExp(/\W/g),''); // Quitar todos los espacios
      return r;
    } else {
      return null;
    }
  }

  buscarAtributo(_atributo: string) {
    _atributo = this.generarToken(_atributo);
    const indice = this.model.atributos.indexOf(_atributo); // Devuelve el indice de la caracteristica a eliminar
    if ((indice > -1) === true) { // Si el atributo exite
      // console.log("Borrando el atributo deseado");
      this.model.atributos.splice(indice, 1); // Remueve el atributo para que se pueda volver a editar
    }
  }

  agregarAtributo(_atributo: string) {
    _atributo = this.generarToken(_atributo);
    const indice = this.model.atributos.indexOf(_atributo); // Devuelve el indice de la caracteristica para ver si ya existe
    if ((indice > -1) === false) { // Si el atributo no exite
      this.model.atributos.push(_atributo);
    }
  }

  agregarNuevaPropiedad() {
    const nuevo_atributo = {
      'nombre': null,
      'token': null
    };
    this.model.propiedades.push(nuevo_atributo);
  }

  borrarPropiedad(indice: number) {
    // alert('Borrando propiedad ' + indice);
    this.model.propiedades.splice(indice, 1);
  }

}
