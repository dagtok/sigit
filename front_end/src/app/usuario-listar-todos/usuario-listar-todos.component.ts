import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { UsuarioService } from 'app/_services';
import { Usuario } from 'app/_models';
import { Observable } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private toastr: ToastsManager,
    private _vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.usuarioService.obtenerCatalogoUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
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
    this.usuarioService.buscarUsuario(_termino_de_busqueda).subscribe(data => {
      this.usuarios = data;
    }).closed;
  }
}
