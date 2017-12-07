import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { LoginComponent } from './login/login.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';
import { SolicitudService } from './solicitud.service';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DireccionComponent } from './direccion/direccion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { FormatoEditarComponent } from './formato-editar/formato-editar.component';
import { SolicitudValidarComponent } from './solicitud-validar/solicitud-validar.component';
import { ArticuloRegistrarComponent } from './articulo-registrar/articulo-registrar.component';
import { ModeloFormularioComponent } from './modelo-formulario/modelo-formulario.component';


const rutasApp:Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path:'registrar-modelo', component: ModeloFormularioComponent },
  
  { path:'lista-libros', component: ListaDeLibrosComponent },
  { path:'detalles/:libroId', component: DetallesComponent },
  { path:'login', component: LoginComponent },
  { path:'editar-formato', component: FormatoEditarComponent },
  { path:'registrar-articulo', component: ArticuloRegistrarComponent },
  { path:'formatos', component: FormatosComponent },
  { path:'realizar-solicitud', component: SolicitudComponent },
  { path:'solicitud/validar', component: SolicitudValidarComponent },
  { path:'solicitud', component: FormatoEditarComponent },
  { path:'direccion', component: DireccionComponent },
  { path:'crear-articulo', component: ArticuloComponent },
  { path:'**', redirectTo: 'realizar-solicitud' }
];

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    SaludoComponent,
    EncabezadoComponent,
    ListaDeLibrosComponent,
    LoginComponent,
    DetallesComponent,
    SolicitudComponent,
    ArticuloComponent,
    DireccionComponent,
    FormatosComponent,
    FormatoEditarComponent,
    SolicitudValidarComponent,
    ArticuloRegistrarComponent,
    ModeloFormularioComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    LibrosSeleccionadosService,
    SolicitudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
