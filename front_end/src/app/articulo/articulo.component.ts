import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo, Categoria, Modelo } from '../_models/index';
import { ArticuloService, CategoriaService } from '../_services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

export class ArticuloComponent implements OnInit {
  accion: String;
  articulo_id: String;
  articulo: Articulo;
  categorias: Array<Categoria>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public articuloServicio: ArticuloService,
    public categoriasServicio: CategoriaService,
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.categoriasServicio.obtenerNombres().subscribe(data => {
      this.categorias = data;
    }).closed;
    this.obtenerAccionARealizar();
  }
  ngOnInit() {
  }

  obtenerAccionARealizar() {
    const tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;

    this.route.params.subscribe(params => {
      if (params.articulo_id) {
        this.articulo_id = params.articulo_id;
      }
    });

    if (tmp_accion === 'crear') {
      this.accion = 'crear';
      this.inicializarArticulo();
    } else if (tmp_accion === 'editar') {
      this.accion = 'editar';
      this.articuloServicio.obtenerArticuloPorId(this.articulo_id).subscribe(articulo => {
        this.articulo = articulo;
      });
    } else if (tmp_accion === 'eliminar') {
      this.accion = 'eliminar';
      this.articuloServicio.eliminar(this.articulo_id).subscribe(response => {
        this.router.navigate(['/admin/articulo/listar-todos']).then(result => {
          this.toastr.info('¡El usuario fue eliminado!.', null);
        });
      });
    }
  }

  inicializarArticulo() {
    this.articulo = new Articulo(null, null, null, null, []);
  }

  asignarTokenAlNombre(_valor_atributo: string) {
    this.articulo.token = this.generarToken(_valor_atributo);
  }

  asignarValorDeAtributo(_valor_atributo: string, _posicion: number) {
    this.articulo.propiedades[_posicion]['valor'] = _valor_atributo;
    this.articulo.propiedades[_posicion]['token'] = this.generarToken(_valor_atributo);
  }

  modificarArticulo() {
    this.articuloServicio.modificarArticulo(this.articulo)
      .subscribe(
      res => {
        this.router.navigate(['/admin/articulo/listar-todos']).then(result => {
          this.toastr.info('¡El usuario fue modificado con exito!.', null);
        });
      },
      err => {
        console.log('Error occured');
      }
      );
  }

  crearArticulo() {
    this.articuloServicio.crearArticulo(this.articulo)
    .subscribe(
      res => {
        this.router.navigate(['/admin/articulo/listar-todos']).then(result => {
          this.inicializarArticulo();
          this.toastr.success('¡Articulo creado con exito!');
        });
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  generarToken(_valor_atributo: string) {
    return _valor_atributo.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

  obtenerCaracteristicas(_categoriaElegida) {
    const index = _categoriaElegida.target.selectedIndex;
    const categoria_id = this.categorias[index]._id;

    this.categoriasServicio.obtenerCaracteristicas(categoria_id).subscribe(modelo => {
      this.articulo = new Articulo(null, null, null, modelo.categoria, modelo.propiedades);
    }).closed;

  }

  agregarToken() {
    // buscar si existe token
    // Si no existe hacer push
  }
  agregarAtributo() {
    // buscar si existe token
    // Si no existe hacer push
  }
}
