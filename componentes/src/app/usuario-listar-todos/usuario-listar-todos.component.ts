import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/_services';
import { Usuario } from 'app/_models';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-usuario-listar-todos',
  templateUrl: './usuario-listar-todos.component.html',
  styleUrls: ['./usuario-listar-todos.component.css']
})
export class UsuarioListarTodosComponent implements OnInit {
  usuarios: Usuario[];
  constructor(
    public usuarioService: UsuarioService,
    private toastr: ToastsManager
  ) {
    this.usuarioService.obtenerCatalogoUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  ngOnInit() { }

}
