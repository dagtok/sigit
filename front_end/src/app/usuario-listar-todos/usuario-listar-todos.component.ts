import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/_services';
import { Usuario } from 'app/_models';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-usuario-listar-todos',
  templateUrl: './usuario-listar-todos.component.html',
  styleUrls: ['./usuario-listar-todos.component.css']
})
export class UsuarioListarTodosComponent implements OnInit {
  usuarios: Usuario[];
  terminoDeBusqueda: string;

  constructor(
    public usuarioService: UsuarioService,
    private toastr: ToastsManager
  ) {
    this.usuarioService.obtenerCatalogoUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  ngOnInit() {
    this.inputBusquedaListener();
  }

  inputBusquedaListener() {
    // Dynamic typing from search box to filter on client logos
    const enCadaPalabraEscrita = Observable.fromEvent(document.getElementById('buscar-usuario'), 'keyup')
      .map((e: KeyboardEvent) => e.target['value'])
      .debounceTime(400)
      .distinctUntilChanged();

    enCadaPalabraEscrita.subscribe(data => {
      this.terminoDeBusqueda = data; // Actualiza termino de busqueda
      this.buscaProductos(this.terminoDeBusqueda); // Busca producto
    });
  }

  buscaProductos(_termino_de_busqueda: string) {
    const token = this.generarToken(_termino_de_busqueda);
    this.usuarioService.buscarUsuario(token).subscribe(data => {
      this.usuarios = data;
    }).closed;
  }

  generarToken(_termino_de_busqueda: string) {
    return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
    // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
  }

}
