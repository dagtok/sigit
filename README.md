# SIGIT - SISTEMA DE GESTION PARA INSUMOS DE TICS
Instalar el  proyecto con 
npm install

# Comandos

# Generar un nuevo componente
ng generate component NombreComponente


RUTA DEL PROYECTO /Users/Maksita/Dropbox/localhost/ipn

# INSTALAR ANGULAR CLI de forma global
npm install -g @angular/cli

# Crear una nueva app
ng new sigit

# ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
Un componente es una funcion de tipo decorador agrega mas comportamiento a una clase desde afuera de la clase 
Debe ser declarada de forma inmediata antes que la clase

# INSTALAR BOOTSTRAP DENTRO DEL PROYECTO
npm install --save bootstrap

# ** PARTIDAS **
Administrar partidas
	Registrar Partida
	Eliminar partida
	Actualizar partida

** Refacciones o accesorio **
Registrar refaccion
Editar refaccion
Cerrar refacciones cuando el proceso de captura ha comenzado
	
	Categorias Padre 
	Tipo
		Caracteristicas 
			[puede tener una o muchas]
			[cada una tiene uno o muchos tipos de dato]


Registrar direcciónes

** Generacion de reportes **
Anexo tecnico


Actualizar Angular 
npm install --save-dev @angular/cli@latest

ng new nombre-app
cd nombre-app

#CREAR UN NUEVO COMPONENTE
ng generate component nuevo-componente

ng serve



<h1>Organizador de tareas</h1>

<div [ngSwitch]="diasSemana">
  <p class="item" *ngSwitchCase="'lunes'">--- LUNES ---</p>
  <p class="item" *ngSwitchCase="'martes'">--- MARTES ---</p>
  <p class="item" *ngSwitchCase="'miercoles'">--- MIERCOLES ---</p>
  <p *ngSwitchCase="13">--- 13 ---</p>
  <p *ngSwitchDefault>Texto Default</p>
</div>

<input type="text" [(ngModel)]="diasSemana" >

<hr>
<hr>
<h1>Estilos y classes</h1>

<div class="cuadrado" [ngStyle]="{'background-color': colorin ? colorin: 'peru'}"></div>

<button (click)="colorin = 'red'" [ngClass]="{ 'activo': colorin == 'red' }">Rojo</button>
<button (click)="colorin = 'green'" [ngClass]="color">Verde</button>
<hr>
<hr>
<h2>EJEMPLOS DE LISTAS</h2>
<pre>
  {{libros | json }}
</pre>
<ul>
  <li *ngFor="let numero of numeros">{{ numero }}</li>
</ul>

<hr>
<hr>
<ul>
    <li *ngFor="let libro of libros">
        {{ libro.titulo }}<br>
        {{ libro.autor }}
    </li>
</ul>

<h1>LIBROS Y VALORES DINAMICOS DENTRO DE LISTAS DE ANGULAR</h1>
<ul>
    <li *ngFor="let libro of libros">
      <a href="http://google.com/#q={{ libro.autor }}" target="_blank">
        {{ libro.titulo }}
      </a>
      <a (click)="mostrarAutor(libro)">
        {{ libro.autor }}
      </a>
    </li>
</ul>
<h3>Ejemplos de operadores adicionales</h3>

<ul>    
    <li *ngFor="let persona of personas; index as indice; first as esPrimero; last as esUltimo; odd as esPar; even as esImpar">
        {{ persona.titulo }}<br>
        {{ persona.autor }} <br>
        {{ indice }}
        <span *ngIf="indice == 5" [ngStyle]="{'background-color': 'red', 'color':'white'}">
            Destacado
        </span>
        <span *ngIf="esPrimero" [ngStyle]="{'background-color': 'red', 'color':'white'}">
            Es el primero
        </span>
        <span *ngIf="esUltimo" [ngStyle]="{'background-color': 'red', 'color':'white'}">
            Es ultimo
        </span>
        <span *ngIf="esPar" [ngStyle]="{'background-color': 'blue', 'color':'white'}">
            Es par
        </span>
        <span *ngIf="esImpar" [ngStyle]="{'background-color': 'pink', 'color':'white'}">
            Es impar
        </span>
        
    </li>
</ul>

<hr>



<h1>Como utilizar un ngIf</h1>

<div class="contenedor">
  <div *ngIf="valor1">
    <h1>Texto 1</h1>
    <p>
      aLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA S
    </p>
  </div>
</div>

<div class="contenedor">
  <div *ngIf="valor2; else otroTexto ">
    <h1>Texto 2</h1>
    <p>
      aLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA SaLSKDLAKS KDASL DKLA S
    </p>
  </div>

  <ng-template #otroTexto>
    Esto es otro texto
  </ng-template>

</div>

<hr>

<button (click)="valor1 = false">Texto 1</button>
<button (click)="valor2 = !valor2">Texto 2</button>

<hr>

<pre>
  {{valor1}}
</pre>
<br>
<pre>
  {{ valor2 }}
</pre>

<h1 [ngStyle]="{'background-color':color}">
  {{title}}<br>
  {{color}}<br>
</h1>
<h1 [ngStyle]="{'background-color':colorHex()}">
  {{ aleatorio }}
</h1>

<app-colores> </app-colores>
<app-colores> </app-colores>

#-

#Crear un nuevo servicio 
ng generate service categoria
ng generate service _services/modelo


# ACTUALIZAR DEPENDENCIAS DE PACKAGE.json 
sudo npm i -g npm-check-updates
sudo npm-check-updates -u
sudo npm install

# Copiar una coleccion de una base a otra 
db.clasificaciones.find().forEach(function(d){ db.getSiblingDB('sigit')['unidad_clasificaciones'].insert(d); });

db.usuarios.find().forEach(function(d){ db.getSiblingDB('sigit')['usuarios'].insert(d); });

# Conocer la version de angular
ng --version

# Actualizar angular a nivel global
sudo npm uninstall -g @angular/cli
sudo npm cache clean
sudo npm install -g @angular/cli@latest
# if sudo npm version is > 5 then use `sudo npm cache verify` to avoid errors (or to avoid using --force)

# Actualizar angular a nivel local
sudo rm -rf node_modules
sudo npm uninstall --save-dev angular-cli
sudo npm install --save-dev @angular/cli@latest
sudo npm install


sudo npm install typescript@2.4 --save-dev
sudo npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest --save


sudo npm install @angular/{animations,common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router}@'^5.0.0' typescript@2.4.2 rxjs@'^5.5.2' --save


"@angular-devkit/core": "0.0.25",
    "@angular-devkit/schematics": "0.0.48",
    
    "core-js": "^2.4.1",
    "ngx-toastr": "^8.1.0",
    "rxjs": "^5.1.0",
    "toastr": "^2.1.4",
    "zone.js": "^0.8.4"

npm install typescript@2.4.2 --save-exact

# INDICES
db.usuarios.createIndex({"$**":"text"});
db.unidades.createIndex({"$**":"text"});
db.modelos.createIndex({"$**":"text"});
db.articulos.createIndex({"$**":"text"});
db.pedidos.createIndex({"$**":"text"});