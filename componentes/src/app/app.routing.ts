import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

//  CUSTOM -->
import { ArticuloComponent } from './articulo/articulo.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SolicitudValidarComponent } from './solicitud-validar/solicitud-validar.component';
import { ReporteAnexoTecnicoComponent } from './reporte-anexo-tecnico/reporte-anexo-tecnico.component';
import { ArticuloListarTodosComponent } from './articulo-listar-todos/articulo-listar-todos.component';
import { PedidoListarTodosComponent } from './pedido-listar-todos/pedido-listar-todos.component';
import { CategoriaListarTodosComponent } from './categoria-listar-todos/categoria-listar-todos.component';
import { UsuarioListarTodosComponent } from './usuario-listar-todos/usuario-listar-todos.component';

import { ReporteComponent } from './reporte/reporte.component';

import { AuthGuard } from './_guards/index';
import { ReporteEstudioFactibilidadComponent } from 'app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component';
import { from } from 'rxjs/observable/from';
import { UnidadListarTodosComponent } from 'app/unidad-listar-todos/unidad-listar-todos.component';
import { UnidadComponent } from 'app/unidad/unidad.component';

// import { DireccionComponent } from './direccion/direccion.component';
// import { FormatosComponent } from './formatos/formatos.component';
// import { FormatoEditarComponent } from './formato-editar/formato-editar.component';

const appRoutes: Routes = [
    { path: '', component: SolicitudComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'solicitud/crear', component: SolicitudComponent, canActivate: [AuthGuard] },
    { path: 'solicitud/validar/:pedido_id', component: SolicitudValidarComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'admin/categoria/crear', component: CategoriaComponent, canActivate: [AuthGuard] },
    { path: 'admin/categoria/editar/:categoria_id', component: CategoriaComponent, canActivate: [AuthGuard] },
    { path: 'admin/categoria/eliminar/:categoria_id', component: CategoriaComponent, canActivate: [AuthGuard] },
    { path: 'admin/categoria/listar-todos', component: CategoriaListarTodosComponent, canActivate: [AuthGuard] },

    { path: 'admin/articulo/crear', component: ArticuloComponent, canActivate: [AuthGuard] },
    { path: 'admin/articulo/editar/:articulo_id', component: ArticuloComponent, canActivate: [AuthGuard] },
    { path: 'admin/articulo/eliminar/:articulo_id', component: ArticuloComponent, canActivate: [AuthGuard] },
    { path: 'admin/articulo/listar-todos', component: ArticuloListarTodosComponent, canActivate: [AuthGuard] },

    { path: 'admin/pedido/listar-todos', component: PedidoListarTodosComponent, canActivate: [AuthGuard] },

    { path: 'admin/reportes', component: ReporteComponent, canActivate: [AuthGuard] },
    { path: 'admin/reporte/anexo-tecnico', component: ReporteAnexoTecnicoComponent, canActivate: [AuthGuard] },
    { path: 'admin/reporte/estudio-factibilidad', component: ReporteEstudioFactibilidadComponent, canActivate: [AuthGuard] },

    { path: 'admin/usuario/crear', component: UsuarioComponent, canActivate: [AuthGuard] },
    { path: 'admin/usuario/editar/:usuario_id', component: UsuarioComponent, canActivate: [AuthGuard] },
    { path: 'admin/usuario/eliminar/:usuario_id', component: UsuarioComponent, canActivate: [AuthGuard] },
    { path: 'admin/usuario/listar-todos', component: UsuarioListarTodosComponent, canActivate: [AuthGuard] },

    { path: 'admin/unidad/crear', component: UnidadComponent, canActivate: [AuthGuard] },
    { path: 'admin/unidad/editar/:unidad_id', component: UnidadComponent, canActivate: [AuthGuard] },
    { path: 'admin/unidad/eliminar/:unidad_id', component: UnidadComponent, canActivate: [AuthGuard] },
    { path: 'admin/unidad/listar-todos', component: UnidadListarTodosComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
    // { path:'direccion', component: DireccionComponent },
    // { path:'detalles/:libroId', component: DetallesComponent },
    // { path:'editar-formato', component: FormatoEditarComponent },
    // { path:'formatos', component: FormatosComponent },
    // { path:'solicitud', component: FormatoEditarComponent },
    // otherwise redirect to home
];

export const routing = RouterModule.forRoot(appRoutes);
