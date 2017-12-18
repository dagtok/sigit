import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Hacer peticiones POST y GET
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { LoginComponent } from './login/login.component';
import { DetallesComponent } from './detalles/detalles.component';

import { SolicitudService } from './solicitud.service';
import { CategoriaService } from './categoria.service';
import { SubcategoriaService } from './subcategoria.service';

import { SolicitudComponent } from './solicitud/solicitud.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DireccionComponent } from './direccion/direccion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { FormatoEditarComponent } from './formato-editar/formato-editar.component';
import { SolicitudValidarComponent } from './solicitud-validar/solicitud-validar.component';
import { ModeloFormularioComponent } from './modelo-formulario/modelo-formulario.component';


const rutasApp:Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path:'registrar-modelo', component: ModeloFormularioComponent },
  
  { path:'lista-libros', component: ListaDeLibrosComponent },
  { path:'detalles/:libroId', component: DetallesComponent },
  { path:'login', component: LoginComponent },
  { path:'editar-formato', component: FormatoEditarComponent },
  { path:'formatos', component: FormatosComponent },
  { path:'realizar-solicitud', component: SolicitudComponent },
  { path:'solicitud/validar', component: SolicitudValidarComponent },
  { path:'solicitud', component: FormatoEditarComponent },
  { path:'direccion', component: DireccionComponent },
  { path:'crear-articulo', component: ArticuloComponent },

  { path:'**', redirectTo: 'crear-articulo' }
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
    ModeloFormularioComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    CategoriaService,
    SubcategoriaService,
    SolicitudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }