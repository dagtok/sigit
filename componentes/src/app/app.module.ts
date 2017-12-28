import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import {
    AlertService,
    AuthenticationService,
    UserService,
    SolicitudService,
    CategoriaService,
    SubcategoriaService
} from './_services/index';
import { AlertComponent } from './_directives/index';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { EncabezadoComponent } from './encabezado/encabezado.component';

// Faltan de revisar
import { DetallesComponent } from './detalles/detalles.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DireccionComponent } from './direccion/direccion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { FormatoEditarComponent } from './formato-editar/formato-editar.component';
import { SolicitudValidarComponent } from './solicitud-validar/solicitud-validar.component';
import { ModeloFormularioComponent } from './modelo-formulario/modelo-formulario.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EncabezadoComponent,
        DetallesComponent,
        SolicitudComponent,
        ArticuloComponent,
        DireccionComponent,
        FormatosComponent,
        FormatoEditarComponent,
        SolicitudValidarComponent,
        ModeloFormularioComponent
    ],
    providers: [
        SolicitudService,
        CategoriaService,
        SubcategoriaService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }