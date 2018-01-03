import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ArticuloComponent } from './articulo/articulo.component';
import { AuthGuard } from './_guards/index';

//  CUSTOM -->
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ModeloFormularioComponent } from './modelo-formulario/modelo-formulario.component';
// import { ColoresComponent } from './colores/colores.component';
// import { EncabezadoComponent } from './encabezado/encabezado.component';
// import { DetallesComponent } from './detalles/detalles.component';

// import { DireccionComponent } from './direccion/direccion.component';
// import { FormatosComponent } from './formatos/formatos.component';
// import { FormatoEditarComponent } from './formato-editar/formato-editar.component';
// import { SolicitudValidarComponent } from './solicitud-validar/solicitud-validar.component';

//  CUSTOM -->

const appRoutes: Routes = [
    { path: '', component: SolicitudComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'realizar-solicitud', component: SolicitudComponent, canActivate: [AuthGuard] },
    { path: 'registrar-modelo', component: ModeloFormularioComponent, canActivate: [AuthGuard] },
    { path: 'crear-articulo', component: ArticuloComponent, canActivate: [AuthGuard] },
    // { path:'detalles/:libroId', component: DetallesComponent },
    // { path:'editar-formato', component: FormatoEditarComponent },
    // { path:'formatos', component: FormatosComponent },
    // { path:'solicitud/validar', component: SolicitudValidarComponent },
    // { path:'solicitud', component: FormatoEditarComponent },
    // { path:'direccion', component: DireccionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);