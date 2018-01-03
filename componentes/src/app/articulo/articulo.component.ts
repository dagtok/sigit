import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Servicio para gestion de categorias de productos
import { ArticuloService, CategoriaService } from '../_services/index';
import { Articulo, Categoria, Modelo } from '../_models/index';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

export class ArticuloComponent implements OnInit {
  articulo: Articulo;
  categorias: Array<Categoria>;

  constructor(public articuloServicio: ArticuloService, public categoriasServicio: CategoriaService) {
    this.categoriasServicio.listar().subscribe(data => {
      this.categorias = data;
    }).closed;
    this.inicializarArticulo();
  }
  ngOnInit() {
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

  crearArticulo() {
    this.articuloServicio.crearArticulo(this.articulo)
      .subscribe(
      res => {
        console.log(res);
        this.inicializarArticulo();
        // this.onSubmit();
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  generarToken(_valor_atributo: string) {
    return _valor_atributo.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

  obtenerCaracteristicas(_categoriaElegida) {
    //console.log(_categoriaElegida.target.selectedIndex);
    //console.log(_categoriaElegida.target.value);
    // console.log(this.categorias[index]._id);

    const index = _categoriaElegida.target.selectedIndex;
    const categoria_id = this.categorias[index]._id;

    this.categoriasServicio.obtenerCaracteristicas(categoria_id).subscribe(modelo => {
      // this.categorias = data;
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
