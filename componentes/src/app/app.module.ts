import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { LoginComponent } from './login/login.component';
import { DetallesComponent } from './detalles/detalles.component';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';

const rutasApp:Routes = [
  { path:'lista-libros', component: ListaDeLibrosComponent },
  { path:'acerca-de', component: AcercaDeComponent },
  { path:'detalles/:libroId', component: DetallesComponent },
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path:'**', redirectTo: 'acerca-de' }
];

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    SaludoComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    ListaDeLibrosComponent,
    LoginComponent,
    DetallesComponent,
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    LibrosSeleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
