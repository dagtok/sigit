webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });

// export * from './fake-backend';


/***/ }),

/***/ "../../../../../src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/_models/articulo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Articulo; });
var Articulo = (function () {
    function Articulo(_id, nombre, token, categoria, 
        // public validacion:object,
        propiedades) {
        this._id = _id;
        this.nombre = nombre;
        this.token = token;
        this.categoria = categoria;
        this.propiedades = propiedades;
    }
    return Articulo;
}());



/***/ }),

/***/ "../../../../../src/app/_models/articuloCarrito.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloCarrito; });
var ArticuloCarrito = (function () {
    function ArticuloCarrito(_id, nombre, cantidad, token, categoria, validacion, propiedades) {
        this._id = _id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.token = token;
        this.categoria = categoria;
        this.validacion = validacion;
        this.propiedades = propiedades;
    }
    return ArticuloCarrito;
}());



/***/ }),

/***/ "../../../../../src/app/_models/categoria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Categoria */
var Categoria = (function () {
    function Categoria(_id, nombre, __v, links) {
        this._id = _id;
        this.nombre = nombre;
        this.__v = __v;
        this.links = links;
    }
    return Categoria;
}());



/***/ }),

/***/ "../../../../../src/app/_models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articulo__ = __webpack_require__("../../../../../src/app/_models/articulo.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__articulo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articuloCarrito__ = __webpack_require__("../../../../../src/app/_models/articuloCarrito.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__articuloCarrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoria__ = __webpack_require__("../../../../../src/app/_models/categoria.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo__ = __webpack_require__("../../../../../src/app/_models/modelo.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__modelo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido__ = __webpack_require__("../../../../../src/app/_models/pedido.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__pedido__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuario__ = __webpack_require__("../../../../../src/app/_models/usuario.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__usuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__unidad__ = __webpack_require__("../../../../../src/app/_models/unidad.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__unidad__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unidadClasificacion__ = __webpack_require__("../../../../../src/app/_models/unidadClasificacion.ts");
/* unused harmony namespace reexport */











/***/ }),

/***/ "../../../../../src/app/_models/modelo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modelo; });
var Modelo = (function () {
    function Modelo(_id, categoria, token, atributos, propiedades) {
        this._id = _id;
        this.categoria = categoria;
        this.token = token;
        this.atributos = atributos;
        this.propiedades = propiedades;
    }
    return Modelo;
}());



/***/ }),

/***/ "../../../../../src/app/_models/pedido.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = (function () {
    function Pedido(_id, estado, unidad, elaboro, autorizo, articulos) {
        this._id = _id;
        this.estado = estado;
        this.unidad = unidad;
        this.elaboro = elaboro;
        this.autorizo = autorizo;
        this.articulos = articulos;
    }
    return Pedido;
}());



/***/ }),

/***/ "../../../../../src/app/_models/unidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidad; });
var Unidad = (function () {
    function Unidad(_id, clave_ur, unidad, sigla, clase_global, clase, clasificacion, direccion) {
        this._id = _id;
        this.clave_ur = clave_ur;
        this.unidad = unidad;
        this.sigla = sigla;
        this.clase_global = clase_global;
        this.clase = clase;
        this.clasificacion = clasificacion;
        this.direccion = direccion;
    }
    return Unidad;
}());



/***/ }),

/***/ "../../../../../src/app/_models/unidadClasificacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UnidadClasificacion */
var UnidadClasificacion = (function () {
    function UnidadClasificacion(clasificacion, descripcion) {
        this.clasificacion = clasificacion;
        this.descripcion = descripcion;
    }
    return UnidadClasificacion;
}());



/***/ }),

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/_models/usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario(_id, nombre, usuario, password, email, unidad, tipo, status, no_pedidos) {
        this._id = _id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.email = email;
        this.unidad = unidad;
        this.tipo = tipo;
        this.status = status;
        this.no_pedidos = no_pedidos;
    }
    return Usuario;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/articulo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticuloService = (function () {
    function ArticuloService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/';
    }
    ArticuloService.prototype.crearArticulo = function (_nuevoArticulo) {
        return this.http.post(this.API_URL + 'api/articulos', _nuevoArticulo);
    };
    ArticuloService.prototype.eliminar = function (_articulo_id) {
        return this.http.delete(this.API_URL + "api/articulos/" + _articulo_id);
    };
    ArticuloService.prototype.modificarArticulo = function (_categoria) {
        return this.http.patch(this.API_URL + 'api/articulos/' + _categoria._id, _categoria, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization_dagtok', 'some-token')
        });
    };
    ArticuloService.prototype.obtenerCatalogoArticulos = function () {
        return this.http.get(this.API_URL + 'api/articulos');
    };
    ArticuloService.prototype.obtenerArticuloPorId = function (_articulo_id) {
        return this.http.get(this.API_URL + "api/articulos/" + _articulo_id);
    };
    ArticuloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ArticuloService);
    return ArticuloService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/';
    }
    AuthenticationService.prototype.login = function (usuario, password) {
        return this.http.post(this.API_URL + 'api/usuarios/login', { usuario: usuario, password: password })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.getUserInfo = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/categoria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriaService = (function () {
    function CategoriaService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/';
    }
    CategoriaService.prototype.modificarCategoria = function (_categoria) {
        return this.http.patch(this.API_URL + 'api/categorias/' + _categoria._id, _categoria, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization_dagtok', 'some-token')
        });
    };
    CategoriaService.prototype.crearCategoria = function (_nuevaCategoria) {
        // console.log(_nuevaCategoria);
        return this.http.post(this.API_URL + 'api/modelos', _nuevaCategoria);
    };
    CategoriaService.prototype.obtenerCatalogoCategorias = function () {
        return this.http.get(this.API_URL + 'api/modelos');
    };
    CategoriaService.prototype.obtenerCategoriaPorId = function (_categoria_id) {
        return this.http.get(this.API_URL + "api/modelos/" + _categoria_id);
    };
    CategoriaService.prototype.eliminar = function (_categoria_id) {
        return this.http.delete(this.API_URL + "api/modelos/" + _categoria_id);
    };
    CategoriaService.prototype.obtenerNombres = function () {
        return this.http.get(this.API_URL + 'api/modelos/nombres');
    };
    CategoriaService.prototype.obtenerCaracteristicas = function (categoria_id) {
        return this.http.get(this.API_URL + 'api/modelos/' + categoria_id);
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service__ = __webpack_require__("../../../../../src/app/_services/usuario.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__usuario_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unidad_service__ = __webpack_require__("../../../../../src/app/_services/unidad.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__unidad_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedido_service__ = __webpack_require__("../../../../../src/app/_services/pedido.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__pedido_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_service__ = __webpack_require__("../../../../../src/app/_services/categoria.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__categoria_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__articulo_service__ = __webpack_require__("../../../../../src/app/_services/articulo.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__articulo_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__solicitud_validar_service__ = __webpack_require__("../../../../../src/app/_services/solicitud-validar.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__solicitud_validar_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reportes_service__ = __webpack_require__("../../../../../src/app/_services/reportes.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__reportes_service__["a"]; });












/***/ }),

/***/ "../../../../../src/app/_services/pedido.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidoService = (function () {
    function PedidoService(http) {
        this.http = http;
        this.inicializarCarrito();
        this.API_URL = 'http://localhost:8000/api/';
    }
    PedidoService.prototype.inicializarCarrito = function () {
        this.articulosCarrito = [];
    };
    PedidoService.prototype.obtenerCatalogoProductos = function () {
        return this.http.get(this.API_URL + 'articulos');
    };
    PedidoService.prototype.obtenerCatalogoPedidos = function () {
        return this.http.get(this.API_URL + 'pedidos');
    };
    PedidoService.prototype.obtenerPedidosPorUnidad = function (_unidad_id) {
        // return this.http.get<Pedido[]>(this.API_URL + 'pedidos');
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('clave_ur', _unidad_id);
        return this.http.get(this.API_URL + 'pedidos', { params: parametros });
    };
    PedidoService.prototype.obtenerPedidoPorId = function (_pedido_id) {
        return this.http.get(this.API_URL + 'pedidos/' + _pedido_id);
    };
    // Buscar producto
    PedidoService.prototype.buscarProductoEnCatalogo = function (_parametro_de_busqueda) {
        // this.obtenerCategorias(_parametro_de_busqueda);
        // this.obtenerProductos(_parametro_de_busqueda);
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('token', _parametro_de_busqueda);
        return this.http.get(this.API_URL + 'articulos', { params: parametros });
    };
    // obtenerCategorias(_parametro_de_busqueda: string){
    // return this.http.get(this.API_URL);
    // }
    // Funcionalidades basicas de Carrito
    PedidoService.prototype.agregarArticuloAlCarrito = function (_nuevoArticulo) {
        var articulo_carrito = new __WEBPACK_IMPORTED_MODULE_2__models_index__["b" /* ArticuloCarrito */](_nuevoArticulo._id, _nuevoArticulo.nombre, 0, _nuevoArticulo.token, _nuevoArticulo.categoria, null, _nuevoArticulo.propiedades);
        if (this.verficarSiExisteEnCarrito(articulo_carrito)) {
            var posicion = this.obtenerPosicion(articulo_carrito);
            if (posicion >= 0) {
                this.articulosCarrito[posicion].cantidad += 1;
            }
        }
        else {
            // Agregar producto como nuevo
            articulo_carrito.cantidad = 1;
            this.articulosCarrito.push(articulo_carrito);
        }
    };
    PedidoService.prototype.restarArticuloACarrito = function (_posicion) {
        if ((this.articulosCarrito[_posicion].cantidad - 1) > 0) {
            this.articulosCarrito[_posicion].cantidad -= 1;
        }
        else {
            this.borrarArticuloDeCarrito(_posicion);
        }
    };
    PedidoService.prototype.sumarArticuloACarrito = function (_posicion) {
        this.articulosCarrito[_posicion].cantidad += 1;
    };
    PedidoService.prototype.verficarSiExisteEnCarrito = function (_productoABuscar) {
        return this.articulosCarrito.find(function (producto) {
            return producto._id === _productoABuscar._id;
        });
    };
    PedidoService.prototype.obtenerPosicion = function (_productoABuscar) {
        return this.articulosCarrito.findIndex(function (producto) {
            return producto._id === _productoABuscar._id;
        });
    };
    PedidoService.prototype.borrarArticuloDeCarrito = function (_posicion) {
        this.articulosCarrito.splice(_posicion, 1);
    };
    PedidoService.prototype.registrarPedido = function (_pedido) {
        return this.http.post(this.API_URL + 'pedidos', _pedido);
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PedidoService);
    return PedidoService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/reportes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportesService = (function () {
    function ReportesService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/api/';
    }
    ReportesService.prototype.obtenerReporteAnexoTecnico = function () {
        return this.http.get(this.API_URL + 'reportes/anexo-tecnico');
    };
    ReportesService.prototype.obtenerReporteEstudioFactibilidad = function () {
        return this.http.get(this.API_URL + 'reportes/estudio-factibilidad');
    };
    ReportesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ReportesService);
    return ReportesService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/solicitud-validar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudValidarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudValidarService = (function () {
    function SolicitudValidarService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/api/';
    }
    SolicitudValidarService.prototype.buscarPedido = function (_pedido_id) {
        // let parametros = new HttpParams().set('_id', _pedido_id);
        // return this.http.get<Pedido>(this.API_URL + 'pedidos', { params: parametros });
        return this.http.get(this.API_URL + 'pedidos/' + _pedido_id);
    };
    SolicitudValidarService.prototype.validarPedido = function (_pedido) {
        return this.http
            .patch(this.API_URL + 'pedidos/' + _pedido._id, _pedido, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization_dagtok', 'some-token')
        });
    };
    SolicitudValidarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SolicitudValidarService);
    return SolicitudValidarService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/unidad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnidadService = (function () {
    function UnidadService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/';
    }
    UnidadService.prototype.obtenerCatalogoUnidades = function () {
        return this.http.get(this.API_URL + "api/unidades");
    };
    UnidadService.prototype.obtenerClasificaciones = function () {
        return this.http.get(this.API_URL + 'api/unidades/niveles');
    };
    UnidadService.prototype.obtenerUnidadesPorClasificacion = function (_clasificacion) {
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]().set('clasificacion', _clasificacion);
        return this.http.get(this.API_URL + 'api/unidades/clasificacion', { params: parametros });
    };
    UnidadService.prototype.crearUnidad = function (_nuevoUnidad) {
        return this.http.post(this.API_URL + 'api/unidades', _nuevoUnidad);
    };
    UnidadService.prototype.obtenerCatalogoUnidads = function () {
        return this.http.get(this.API_URL + "api/unidades");
    };
    /*
    public obtenerClasificaciones() {
        return this.http.get(`${this.API_URL}api/unidades/niveles`);
    }
    */
    UnidadService.prototype.obtenerUnidadPorId = function (_unidad_id) {
        return this.http.get(this.API_URL + "api/unidades/" + _unidad_id);
    };
    UnidadService.prototype.modificarUnidad = function (_categoria) {
        return this.http.patch(this.API_URL + 'api/unidades/' + _categoria._id, _categoria, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization_dagtok', 'some-token')
        });
    };
    UnidadService.prototype.eliminar = function (_unidad_id) {
        return this.http.delete(this.API_URL + "api/unidades/" + _unidad_id);
    };
    UnidadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UnidadService);
    return UnidadService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/';
    }
    UsuarioService.prototype.crearUsuario = function (_nuevoUsuario) {
        return this.http.post(this.API_URL + 'api/usuarios', _nuevoUsuario);
    };
    UsuarioService.prototype.obtenerCatalogoUsuarios = function () {
        return this.http.get(this.API_URL + "api/usuarios");
    };
    UsuarioService.prototype.obtenerClasificaciones = function () {
        return this.http.get(this.API_URL + "api/unidades/niveles");
    };
    UsuarioService.prototype.obtenerUsuarioPorId = function (_usuario_id) {
        return this.http.get(this.API_URL + "api/usuarios/" + _usuario_id);
    };
    UsuarioService.prototype.modificarUsuario = function (_categoria) {
        return this.http.patch(this.API_URL + 'api/usuarios/' + _categoria._id, _categoria, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization_dagtok', 'some-token')
        });
    };
    UsuarioService.prototype.eliminar = function (_usuario_id) {
        return this.http.delete(this.API_URL + "api/usuarios/" + _usuario_id);
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sigit-app-body{\n    background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sigit-app-body\" class=\"container-fluid\">\n    <alert></alert>\n    <router-outlet></router-outlet>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center p-2\" style=\"background-color: #77455a;color:white;\">\n            <span>DIRECCIÓN DE CÓMPUTO Y COMUNICACIONES</span>\n        </div>\n        <div class=\"col-12 text-center p-2\" style=\"background: #393b3c;border-top:25px solid #28292a;\">\n            <img class=\"gobmx-footer\" src=\"https://framework-gb.cdn.gob.mx/assets/images/gobmxlogo.svg\" alt=\"Página de inicio, Gobierno de México\"\n                width=\"126\" height=\"39\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastr, vRef) {
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_index__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_index__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__encabezado_encabezado_component__ = __webpack_require__("../../../../../src/app/encabezado/encabezado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__encabezado_usuario_encabezado_usuario_component__ = __webpack_require__("../../../../../src/app/encabezado-usuario/encabezado-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__solicitud_solicitud_component__ = __webpack_require__("../../../../../src/app/solicitud/solicitud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__usuario_usuario_component__ = __webpack_require__("../../../../../src/app/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__articulo_articulo_component__ = __webpack_require__("../../../../../src/app/articulo/articulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__direccion_direccion_component__ = __webpack_require__("../../../../../src/app/direccion/direccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__formatos_formatos_component__ = __webpack_require__("../../../../../src/app/formatos/formatos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__formato_editar_formato_editar_component__ = __webpack_require__("../../../../../src/app/formato-editar/formato-editar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__solicitud_validar_solicitud_validar_component__ = __webpack_require__("../../../../../src/app/solicitud-validar/solicitud-validar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__categoria_categoria_component__ = __webpack_require__("../../../../../src/app/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reporte_anexo_tecnico_reporte_anexo_tecnico_component__ = __webpack_require__("../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reporte_estudio_factibilidad_reporte_estudio_factibilidad_component__ = __webpack_require__("../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__articulo_listar_todos_articulo_listar_todos_component__ = __webpack_require__("../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__categoria_listar_todos_categoria_listar_todos_component__ = __webpack_require__("../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__reporte_reporte_component__ = __webpack_require__("../../../../../src/app/reporte/reporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__usuario_listar_todos_usuario_listar_todos_component__ = __webpack_require__("../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__unidad_unidad_component__ = __webpack_require__("../../../../../src/app/unidad/unidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__unidad_listar_todos_unidad_listar_todos_component__ = __webpack_require__("../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__solicitud_seguimiento_solicitud_seguimiento_component__ = __webpack_require__("../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__solicitudes_solicitudes_component__ = __webpack_require__("../../../../../src/app/solicitudes/solicitudes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pedidos_pedidos_component__ = __webpack_require__("../../../../../src/app/pedidos/pedidos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// Faltan de revisar









// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_index__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_index__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__encabezado_encabezado_component__["a" /* EncabezadoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__encabezado_usuario_encabezado_usuario_component__["a" /* EncabezadoUsuarioComponent */],
                __WEBPACK_IMPORTED_MODULE_16__solicitud_solicitud_component__["a" /* SolicitudComponent */],
                __WEBPACK_IMPORTED_MODULE_18__articulo_articulo_component__["a" /* ArticuloComponent */],
                __WEBPACK_IMPORTED_MODULE_19__direccion_direccion_component__["a" /* DireccionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__formatos_formatos_component__["a" /* FormatosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__formato_editar_formato_editar_component__["a" /* FormatoEditarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__solicitud_validar_solicitud_validar_component__["a" /* SolicitudValidarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__categoria_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__reporte_anexo_tecnico_reporte_anexo_tecnico_component__["a" /* ReporteAnexoTecnicoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__usuario_usuario_component__["a" /* UsuarioComponent */],
                __WEBPACK_IMPORTED_MODULE_26__reporte_estudio_factibilidad_reporte_estudio_factibilidad_component__["a" /* ReporteEstudioFactibilidadComponent */],
                __WEBPACK_IMPORTED_MODULE_27__articulo_listar_todos_articulo_listar_todos_component__["a" /* ArticuloListarTodosComponent */],
                __WEBPACK_IMPORTED_MODULE_28__categoria_listar_todos_categoria_listar_todos_component__["a" /* CategoriaListarTodosComponent */],
                __WEBPACK_IMPORTED_MODULE_29__reporte_reporte_component__["a" /* ReporteComponent */],
                __WEBPACK_IMPORTED_MODULE_30__usuario_listar_todos_usuario_listar_todos_component__["a" /* UsuarioListarTodosComponent */],
                __WEBPACK_IMPORTED_MODULE_31__unidad_unidad_component__["a" /* UnidadComponent */],
                __WEBPACK_IMPORTED_MODULE_32__unidad_listar_todos_unidad_listar_todos_component__["a" /* UnidadListarTodosComponent */],
                __WEBPACK_IMPORTED_MODULE_33__solicitud_seguimiento_solicitud_seguimiento_component__["a" /* SolicitudSeguimientoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__solicitudes_solicitudes_component__["a" /* SolicitudesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pedidos_pedidos_component__["a" /* PedidosComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_index__["b" /* ArticuloService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["e" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["d" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_7__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["c" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["g" /* SolicitudValidarService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["f" /* ReportesService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["i" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["h" /* UnidadService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["j" /* UsuarioService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__helpers_index__["a" /* JwtInterceptor */],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulo_articulo_component__ = __webpack_require__("../../../../../src/app/articulo/articulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solicitud_solicitud_component__ = __webpack_require__("../../../../../src/app/solicitud/solicitud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario_component__ = __webpack_require__("../../../../../src/app/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__ = __webpack_require__("../../../../../src/app/categoria/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__solicitud_validar_solicitud_validar_component__ = __webpack_require__("../../../../../src/app/solicitud-validar/solicitud-validar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reporte_anexo_tecnico_reporte_anexo_tecnico_component__ = __webpack_require__("../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articulo_listar_todos_articulo_listar_todos_component__ = __webpack_require__("../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pedidos_pedidos_component__ = __webpack_require__("../../../../../src/app/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categoria_listar_todos_categoria_listar_todos_component__ = __webpack_require__("../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__usuario_listar_todos_usuario_listar_todos_component__ = __webpack_require__("../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__solicitudes_solicitudes_component__ = __webpack_require__("../../../../../src/app/solicitudes/solicitudes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__solicitud_seguimiento_solicitud_seguimiento_component__ = __webpack_require__("../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reporte_reporte_component__ = __webpack_require__("../../../../../src/app/reporte/reporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_reporte_estudio_factibilidad_reporte_estudio_factibilidad_component__ = __webpack_require__("../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_unidad_listar_todos_unidad_listar_todos_component__ = __webpack_require__("../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_unidad_unidad_component__ = __webpack_require__("../../../../../src/app/unidad/unidad.component.ts");



//  CUSTOM -->

















// import { DireccionComponent } from './direccion/direccion.component';
// import { FormatosComponent } from './formatos/formatos.component';
// import { FormatoEditarComponent } from './formato-editar/formato-editar.component';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__solicitud_solicitud_component__["a" /* SolicitudComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]], pathMatch: 'full' },
    { path: 'solicitud/crear', component: __WEBPACK_IMPORTED_MODULE_4__solicitud_solicitud_component__["a" /* SolicitudComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'solicitudes', component: __WEBPACK_IMPORTED_MODULE_13__solicitudes_solicitudes_component__["a" /* SolicitudesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'solicitud/seguimiento/:pedido_id', component: __WEBPACK_IMPORTED_MODULE_14__solicitud_seguimiento_solicitud_seguimiento_component__["a" /* SolicitudSeguimientoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'solicitud/validar/:pedido_id', component: __WEBPACK_IMPORTED_MODULE_7__solicitud_validar_solicitud_validar_component__["a" /* SolicitudValidarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */] },
    { path: 'admin/categoria/crear', component: __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__["a" /* CategoriaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/categoria/editar/:categoria_id', component: __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__["a" /* CategoriaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/categoria/eliminar/:categoria_id', component: __WEBPACK_IMPORTED_MODULE_6__categoria_categoria_component__["a" /* CategoriaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/categoria/listar-todos', component: __WEBPACK_IMPORTED_MODULE_11__categoria_listar_todos_categoria_listar_todos_component__["a" /* CategoriaListarTodosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/articulo/crear', component: __WEBPACK_IMPORTED_MODULE_3__articulo_articulo_component__["a" /* ArticuloComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/articulo/editar/:articulo_id', component: __WEBPACK_IMPORTED_MODULE_3__articulo_articulo_component__["a" /* ArticuloComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/articulo/eliminar/:articulo_id', component: __WEBPACK_IMPORTED_MODULE_3__articulo_articulo_component__["a" /* ArticuloComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/articulo/listar-todos', component: __WEBPACK_IMPORTED_MODULE_9__articulo_listar_todos_articulo_listar_todos_component__["a" /* ArticuloListarTodosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/pedido/listar-todos', component: __WEBPACK_IMPORTED_MODULE_10__pedidos_pedidos_component__["a" /* PedidosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/reportes', component: __WEBPACK_IMPORTED_MODULE_15__reporte_reporte_component__["a" /* ReporteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/reporte/anexo-tecnico', component: __WEBPACK_IMPORTED_MODULE_8__reporte_anexo_tecnico_reporte_anexo_tecnico_component__["a" /* ReporteAnexoTecnicoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/reporte/estudio-factibilidad', component: __WEBPACK_IMPORTED_MODULE_17_app_reporte_estudio_factibilidad_reporte_estudio_factibilidad_component__["a" /* ReporteEstudioFactibilidadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/usuario/crear', component: __WEBPACK_IMPORTED_MODULE_5__usuario_usuario_component__["a" /* UsuarioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/usuario/editar/:usuario_id', component: __WEBPACK_IMPORTED_MODULE_5__usuario_usuario_component__["a" /* UsuarioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/usuario/eliminar/:usuario_id', component: __WEBPACK_IMPORTED_MODULE_5__usuario_usuario_component__["a" /* UsuarioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/usuario/listar-todos', component: __WEBPACK_IMPORTED_MODULE_12__usuario_listar_todos_usuario_listar_todos_component__["a" /* UsuarioListarTodosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/unidad/crear', component: __WEBPACK_IMPORTED_MODULE_19_app_unidad_unidad_component__["a" /* UnidadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/unidad/editar/:unidad_id', component: __WEBPACK_IMPORTED_MODULE_19_app_unidad_unidad_component__["a" /* UnidadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/unidad/eliminar/:unidad_id', component: __WEBPACK_IMPORTED_MODULE_19_app_unidad_unidad_component__["a" /* UnidadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: 'admin/unidad/listar-todos', component: __WEBPACK_IMPORTED_MODULE_18_app_unidad_listar_todos_unidad_listar_todos_component__["a" /* UnidadListarTodosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_index__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
    // { path:'direccion', component: DireccionComponent },
    // { path:'detalles/:libroId', component: DetallesComponent },
    // { path:'editar-formato', component: FormatoEditarComponent },
    // { path:'formatos', component: FormatosComponent },
    // { path:'solicitud', component: FormatoEditarComponent },
    // otherwise redirect to home
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center mb-5 mt-4\">\n      <div class=\"d-flex justify-content-between\">\n        <div>&nbsp;</div>\n        <div>\n          <h1>Articulos</h1>\n        </div>\n        <div>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/articulo/crear' ]\">CREAR ARTICULO</a>\n        </div>\n      </div>\n      <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre del usuario o unidad de adscripción\">\n    </div>\n    <div class=\"col-sm-4 mb-3\" *ngFor=\"let articulo of articulos\">\n      <div class=\"card text-center\">\n        <div class=\"card-block p-2\">\n          <h3 class=\"card-title\">{{ articulo.categoria }}</h3>\n          <p class=\"card-text\">\n            {{ articulo.nombre }}\n          </p>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/articulo/editar', articulo._id ]\">Editar</a>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/articulo/eliminar', articulo._id ]\">Eliminar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloListarTodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticuloListarTodosComponent = (function () {
    function ArticuloListarTodosComponent(articuloService) {
        this.articuloService = articuloService;
    }
    ArticuloListarTodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articuloService.obtenerCatalogoArticulos().subscribe(function (articulos) {
            _this.articulos = articulos;
        });
    };
    ArticuloListarTodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-articulo-listar-todos',
            template: __webpack_require__("../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articulo-listar-todos/articulo-listar-todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* ArticuloService */]])
    ], ArticuloListarTodosComponent);
    return ArticuloListarTodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/articulo/articulo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articulo/articulo.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center\">\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'crear'\">Crear Articulo.</h1>\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'editar'\">Editar Articulo.</h1>\n    </div>\n    <div class=\"offset-2 col-8\" *ngIf=\"articulo && categorias\">\n      <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"categoria\">Categoria</label>\n\n          <select class=\"form-control\" id=\"categoria\" required (change)=\"obtenerCaracteristicas($event)\" [(ngModel)]=\"articulo.categoria\"\n            name=\"categoria\">\n            <option *ngFor=\"let categoria of categorias\" [value]=\"categoria.categoria\" [selected]=\"articulo.categoria === categoria.categoria\">{{categoria.categoria}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nombre\">Nombre del Modelo</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombre\" required placeholder=\"EJ: TIPO 1\" [(ngModel)]=\"articulo.nombre\" name=\"nombre\"\n            (ngModelChange)=\"asignarTokenAlNombre($event)\" #nombre=\"ngModel\" #spy>\n          <div [hidden]=\"nombre.valid || nombre.pristine\" class=\"alert alert-danger\">\n            Nombre del articulo es requerido\n          </div>\n        </div>\n        <span>\n          Caracteristicas ({{ articulo.propiedades.length }})\n        </span>\n        <div class=\"form-group row\">\n          <div class=\"col-11\" *ngFor=\"let propiedad of articulo.propiedades; let i = index;\">\n            <label for=\"{{ propiedad.nombre }}\">{{ propiedad.nombre }}</label>\n            <input type=\"text\" class=\"form-control\" required name=\"{{ propiedad.nombre }}\" id=\"{{ propiedad.nombre }}\" (ngModelChange)=\"asignarValorDeAtributo($event, i)\"\n              [(ngModel)]=\"propiedad.valor\">\n          </div>\n        </div>\n        <button type=\"submit\" *ngIf=\"accion === 'crear'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"crearArticulo();heroForm.reset();\" [disabled]=\"!heroForm.form.valid\">\n          Crear Articulo\n        </button>\n        <button type=\"submit\" *ngIf=\"accion === 'editar'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"modificarArticulo();\" [disabled]=\"!heroForm.form.valid\">\n          Guardar Modificaciones al Articulo\n        </button>\n      </form>\n    </div>\n    <!--\n    <div class=\"col-6\">\n      <pre>\n        {{ articulo | json }}\n      </pre>\n    </div>\n  -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/articulo/articulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Servicio para gestion de categorias de productos


var ArticuloComponent = (function () {
    function ArticuloComponent(route, router, articuloServicio, categoriasServicio) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.articuloServicio = articuloServicio;
        this.categoriasServicio = categoriasServicio;
        this.categoriasServicio.obtenerNombres().subscribe(function (data) {
            _this.categorias = data;
        }).closed;
        this.obtenerAccionARealizar();
    }
    ArticuloComponent.prototype.ngOnInit = function () {
    };
    ArticuloComponent.prototype.obtenerAccionARealizar = function () {
        var _this = this;
        var tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            if (params.articulo_id) {
                _this.articulo_id = params.articulo_id;
            }
        });
        if (tmp_accion === 'crear') {
            this.accion = 'crear';
            this.inicializarArticulo();
        }
        else if (tmp_accion === 'editar') {
            this.accion = 'editar';
            this.articuloServicio.obtenerArticuloPorId(this.articulo_id).subscribe(function (articulo) {
                _this.articulo = articulo;
            });
        }
        else if (tmp_accion === 'eliminar') {
            this.accion = 'eliminar';
            this.articuloServicio.eliminar(this.articulo_id).subscribe(function (response) {
                _this.router.navigate(['/admin/articulo/listar-todos']);
            });
        }
    };
    ArticuloComponent.prototype.inicializarArticulo = function () {
        this.articulo = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* Articulo */](null, null, null, null, []);
    };
    ArticuloComponent.prototype.asignarTokenAlNombre = function (_valor_atributo) {
        this.articulo.token = this.generarToken(_valor_atributo);
    };
    ArticuloComponent.prototype.asignarValorDeAtributo = function (_valor_atributo, _posicion) {
        this.articulo.propiedades[_posicion]['valor'] = _valor_atributo;
        this.articulo.propiedades[_posicion]['token'] = this.generarToken(_valor_atributo);
    };
    ArticuloComponent.prototype.modificarArticulo = function () {
        var _this = this;
        this.articuloServicio.modificarArticulo(this.articulo)
            .subscribe(function (res) {
            _this.router.navigate(['/admin/articulo/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    ArticuloComponent.prototype.crearArticulo = function () {
        var _this = this;
        this.articuloServicio.crearArticulo(this.articulo)
            .subscribe(function (res) {
            console.log(res);
            _this.inicializarArticulo();
            // this.onSubmit();
        }, function (err) {
            console.log('Error occured');
        });
    };
    ArticuloComponent.prototype.generarToken = function (_valor_atributo) {
        return _valor_atributo.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
        // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
    };
    ArticuloComponent.prototype.obtenerCaracteristicas = function (_categoriaElegida) {
        var _this = this;
        var index = _categoriaElegida.target.selectedIndex;
        var categoria_id = this.categorias[index]._id;
        this.categoriasServicio.obtenerCaracteristicas(categoria_id).subscribe(function (modelo) {
            _this.articulo = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* Articulo */](null, null, null, modelo.categoria, modelo.propiedades);
        }).closed;
    };
    ArticuloComponent.prototype.agregarToken = function () {
        // buscar si existe token
        // Si no existe hacer push
    };
    ArticuloComponent.prototype.agregarAtributo = function () {
        // buscar si existe token
        // Si no existe hacer push
    };
    ArticuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-articulo',
            template: __webpack_require__("../../../../../src/app/articulo/articulo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articulo/articulo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* ArticuloService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CategoriaService */]])
    ], ArticuloComponent);
    return ArticuloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"row\">\n    <div class=\"col-12 text-center mb-5 mt-4\">\n        <div class=\"d-flex justify-content-between\">\n            <div>&nbsp;</div>\n            <div>\n                <h1>Categorias</h1>\n            </div>\n            <div>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/admin/categoria/crear']\">CREAR CATEGORIA</a>\n            </div>\n        </div>\n        <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre del usuario o unidad de adscripción\">\n    </div>\n    <div class=\"col-sm-4 mb-3\" *ngFor=\"let categoria of categorias\">\n        <div class=\"card text-center\">\n            <div class=\"card-block p-2\">\n                <h3 class=\"card-title\">{{ categoria.categoria }}</h3>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/admin/categoria/editar/', categoria._id]\">EDITAR</a>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/admin/categoria/eliminar/', categoria._id]\">ELIMINAR</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaListarTodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriaListarTodosComponent = (function () {
    function CategoriaListarTodosComponent(categoriaService) {
        var _this = this;
        this.categoriaService = categoriaService;
        this.categoriaService.obtenerCatalogoCategorias().subscribe(function (categorias) {
            _this.categorias = categorias;
        });
    }
    CategoriaListarTodosComponent.prototype.ngOnInit = function () {
    };
    CategoriaListarTodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categoria-listar-todos',
            template: __webpack_require__("../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categoria-listar-todos/categoria-listar-todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* CategoriaService */]])
    ], CategoriaListarTodosComponent);
    return CategoriaListarTodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul,li{\n    padding: 0;\n    margin: 0;\n}\nli{\n    list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\">\n            <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'crear'\">Crear Categoría.</h1>\n            <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'editar'\">Editar Categoría.</h1>\n        </div>\n        <div class=\"offset-2 col-8\" *ngIf=\"model\">\n            <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"categoria\">Nombre de la categoría</label>\n                    <input type=\"text\" class=\"form-control\" id=\"categoria\" name=\"categoria\" (ngModelChange)=\"asignarTokenACategoria($event)\"\n                        required [(ngModel)]=\"model.categoria\" #categoria=\"ngModel\">\n                    <div [hidden]=\"categoria.valid || categoria.pristine\" class=\"alert alert-danger\">\n                        Nombre de la categoria\n                    </div>\n                </div>\n                <hr>\n                <h3>Caracteristicas</h3>\n                <ul>\n                    <li *ngFor=\"let propiedad of model.propiedades; let i = index;\">\n                        <div class=\"d-flex\">\n                            <input type=\"text\" class=\"form-control\" required name=\"propiedades{{i}}\" id=\"propiedades{{i}}\" (focus)=\"buscarAtributo($event.target.value)\"\n                                (blur)=\"agregarAtributo($event.target.value)\" (ngModelChange)=\"actualizarTokenAtributo($event, i)\"\n                                [(ngModel)]=\"model.propiedades[i].nombre\">\n                            <button (click)=\"borrarPropiedad(i)\">\n                                Borrar\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </li>\n                    <li>\n                        <button class=\"btn btn-outline-dark btn-block mt-1 mb-5\" (click)=\"agregarNuevaPropiedad()\" type=\"button\">Agregar Nueva Caracteristica</button>\n                    </li>\n                </ul>\n                <button type=\"submit\" *ngIf=\"accion === 'crear'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"crearCategoria();heroForm.reset();\"\n                    [disabled]=\"!heroForm.form.valid\">\n                    Registrar Categoria\n                </button>\n                <button type=\"submit\" *ngIf=\"accion === 'editar'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"modificarCategoria();\"\n                    [disabled]=\"!heroForm.form.valid\">\n                    Modificar Categoria\n                </button>\n            </form>\n        </div>\n        <!--\n        <div class=\"col-6\">\n            <pre>{{ model | json}}</pre>\n        </div>\n        -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/categoria/categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaComponent = (function () {
    function CategoriaComponent(route, router, categoriaServicio) {
        this.route = route;
        this.router = router;
        this.categoriaServicio = categoriaServicio;
        this.submitted = false;
        this.obtenerAccionARealizar();
    }
    CategoriaComponent.prototype.ngOnInit = function () {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    // Procesa los parametros de la URL para saber si el usuario intenta crear o editar
    CategoriaComponent.prototype.obtenerAccionARealizar = function () {
        var _this = this;
        var tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            if (params.categoria_id) {
                _this.categoria_id = params.categoria_id;
            }
        });
        if (tmp_accion === 'crear') {
            this.accion = 'crear';
            this.inicializarCategoria();
        }
        else if (tmp_accion === 'editar') {
            this.accion = 'editar';
            this.categoriaServicio.obtenerCategoriaPorId(this.categoria_id).subscribe(function (categoria) {
                _this.model = categoria;
            });
        }
        else if (tmp_accion === 'eliminar') {
            this.accion = 'eliminar';
            this.categoriaServicio.eliminar(this.categoria_id).subscribe(function (response) {
                _this.router.navigate(['/admin/categoria/listar-todos']);
            });
        }
    };
    CategoriaComponent.prototype.inicializarCategoria = function () {
        this.atributos = [];
        this.propiedades = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_index__["c" /* Modelo */](null, '', '', this.atributos, this.propiedades);
    };
    CategoriaComponent.prototype.asignarTokenACategoria = function (_valor_atributo) {
        if (_valor_atributo && _valor_atributo.length > 0) {
            this.model.token = _valor_atributo.replace(/[^\w\s]/gi, '')
                .toLowerCase().replace(/ /g, '')
                .replace(/[aeiou]/ig, '')
                .replace(/[0123456789_]/ig, '');
        }
    };
    CategoriaComponent.prototype.actualizarTokenAtributo = function (_valor_atributo, _posicion) {
        this.model.propiedades[_posicion]['token'] = this.generarToken(_valor_atributo);
    };
    CategoriaComponent.prototype.modificarCategoria = function () {
        var _this = this;
        this.categoriaServicio.modificarCategoria(this.model)
            .subscribe(function (res) {
            _this.router.navigate(['/admin/categoria/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    CategoriaComponent.prototype.crearCategoria = function () {
        var _this = this;
        this.categoriaServicio.crearCategoria(this.model)
            .subscribe(function (res) {
            _this.inicializarCategoria();
            _this.router.navigate(['/admin/categoria/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    CategoriaComponent.prototype.generarToken = function (_atributo) {
        if (_atributo != null) {
            var r = _atributo.toLowerCase().split(' ').join('-');
            r = r.replace(/[`~!@#$%^&*()_|+\=?;:'",.´·<>\{\}\[\]\\\/]/gi, '');
            r = r.replace(new RegExp(/\s/g), '');
            r = r.replace(new RegExp(/[àáâãäå]/g), 'a');
            r = r.replace(new RegExp(/æ/g), 'ae');
            r = r.replace(new RegExp(/ç/g), 'c');
            r = r.replace(new RegExp(/[èéêë]/g), 'e');
            r = r.replace(new RegExp(/[ìíîï]/g), 'i');
            r = r.replace(new RegExp(/ñ/g), 'n');
            r = r.replace(new RegExp(/[òóôõö]/g), 'o');
            r = r.replace(new RegExp(/œ/g), 'oe');
            r = r.replace(new RegExp(/[ùúûü]/g), 'u');
            r = r.replace(new RegExp(/[ýÿ]/g), 'y');
            r = r.replace(/[0123456789]/ig, '');
            // r = r.replace(new RegExp(/\W/g),''); // Quitar todos los espacios
            return r;
        }
        else {
            return null;
        }
    };
    CategoriaComponent.prototype.buscarAtributo = function (_atributo) {
        _atributo = this.generarToken(_atributo);
        var indice = this.model.atributos.indexOf(_atributo); // Devuelve el indice de la caracteristica a eliminar
        if ((indice > -1) === true) {
            // console.log("Borrando el atributo deseado");
            this.model.atributos.splice(indice, 1); // Remueve el atributo para que se pueda volver a editar
        }
    };
    CategoriaComponent.prototype.agregarAtributo = function (_atributo) {
        _atributo = this.generarToken(_atributo);
        var indice = this.model.atributos.indexOf(_atributo); // Devuelve el indice de la caracteristica para ver si ya existe
        if ((indice > -1) === false) {
            this.model.atributos.push(_atributo);
        }
    };
    CategoriaComponent.prototype.agregarNuevaPropiedad = function () {
        var nuevo_atributo = {
            'nombre': null,
            'token': null
        };
        this.model.propiedades.push(nuevo_atributo);
    };
    CategoriaComponent.prototype.borrarPropiedad = function (indice) {
        // alert('Borrando propiedad ' + indice);
        this.model.propiedades.splice(indice, 1);
    };
    CategoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/categoria/categoria.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categoria/categoria.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* CategoriaService */]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/direccion/direccion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/direccion/direccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n          <h1>DIRECCIÓN</h1>\n          <textarea class=\"form-control\" name=\"direccion\" id=\"direccion\" cols=\"30\" rows=\"10\"></textarea>\n          <button class=\"btn\">Actualizar Dirección</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/direccion/direccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DireccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DireccionComponent = (function () {
    function DireccionComponent() {
    }
    DireccionComponent.prototype.ngOnInit = function () {
    };
    DireccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-direccion',
            template: __webpack_require__("../../../../../src/app/direccion/direccion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/direccion/direccion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DireccionComponent);
    return DireccionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/encabezado-usuario/encabezado-usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/encabezado-usuario/encabezado-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"d-flex justify-content-between\" style=\"background-color:white; border-top:1px solid #28292A; border-bottom: 8px solid gray\">\n      <div class=\"d-flex\">\n        <img src=\"assets/images/logo-sep-ipn.png\" height=\"87\">\n        <span class=\"mt-4\">\n          Instituto Politécnico Nacional\n          <br> \"La Técnica al Servicio de la Patria\"\n        </span>\n      </div>\n      <div class=\"p-2\" *ngIf=\"informacion_usuario\">\n        <span>\n          {{ informacion_usuario.unidad.nombre }}\n          <br> {{ informacion_usuario.nombre }}\n          <br> {{ informacion_usuario.tipo }}\n          <br>\n          <a [routerLink]=\"['/login']\">\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n            CERRAR SESIÓN\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/encabezado-usuario/encabezado-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncabezadoUsuarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncabezadoUsuarioComponent = (function () {
    function EncabezadoUsuarioComponent(autentificacionService) {
        this.autentificacionService = autentificacionService;
        this.informacion_usuario = this.autentificacionService.getUserInfo(); // Obtiene informacion del local storage
        // console.log(informacion_usuario);
    }
    EncabezadoUsuarioComponent.prototype.ngOnInit = function () {
    };
    EncabezadoUsuarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-encabezado-usuario',
            template: __webpack_require__("../../../../../src/app/encabezado-usuario/encabezado-usuario.component.html"),
            styles: [__webpack_require__("../../../../../src/app/encabezado-usuario/encabezado-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* AuthenticationService */]])
    ], EncabezadoUsuarioComponent);
    return EncabezadoUsuarioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/encabezado/encabezado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/encabezado/encabezado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"d-flex justify-content-between\" style=\"background-color:white; border-top:2px solid #28292A;\">\n        <div class=\"d-flex\">\n          <img src=\"assets/images/logo-sep-ipn.png\" height=\"87\">\n          <span class=\"mt-4\">\n            Instituto Politécnico Nacional\n            <br> \"La Técnica al Servicio de la Patria\"\n          </span>\n        </div>\n        <div class=\"p-2\" *ngIf=\"informacion_usuario\">\n          <span>\n            {{ informacion_usuario.unidad.nombre }}\n            <br> {{ informacion_usuario.nombre }}\n            <br> {{ informacion_usuario.tipo }}\n          </span>\n        </div>\n      </div>\n      <nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color:#ededed\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/usuario/listar-todos']\">USUARIOS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/unidad/listar-todos']\">UNIDADES</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/reportes']\">REPORTES</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/categoria/listar-todos']\">CATEGORIAS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/articulo/listar-todos']\">ARTICULOS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/admin/pedido/listar-todos']\">PEDIDOS</a>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <a [routerLink]=\"['/login']\">\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n            CERRAR SESIÓN\n          </a>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/encabezado/encabezado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncabezadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncabezadoComponent = (function () {
    function EncabezadoComponent(autentificacionService) {
        this.autentificacionService = autentificacionService;
        this.informacion_usuario = this.autentificacionService.getUserInfo(); // Obtiene informacion del local storage
        // console.log(informacion_usuario);
    }
    EncabezadoComponent.prototype.ngOnInit = function () {
    };
    EncabezadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-encabezado',
            template: __webpack_require__("../../../../../src/app/encabezado/encabezado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/encabezado/encabezado.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* AuthenticationService */]])
    ], EncabezadoComponent);
    return EncabezadoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/formato-editar/formato-editar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/formato-editar/formato-editar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>ANEXO TECNICO</h1>\n  <button>TAG 1</button>\n  <button>TAG 2</button>\n  <button>TAG 3</button>\n  <table>\n      <tr>\n          <td>SECCION</td>\n      </tr>\n      <tr>\n          <td>\n              <textarea class=\"form-control\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n          </td>\n      </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/formato-editar/formato-editar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatoEditarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormatoEditarComponent = (function () {
    function FormatoEditarComponent() {
    }
    FormatoEditarComponent.prototype.ngOnInit = function () {
    };
    FormatoEditarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-formato-editar',
            template: __webpack_require__("../../../../../src/app/formato-editar/formato-editar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/formato-editar/formato-editar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormatoEditarComponent);
    return FormatoEditarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/formatos/formatos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/formatos/formatos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-3 text-center\">\n          <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i><br>\n          CONTENEDOR<br>\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"col-3 text-center\">\n          <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i><br>\n          CONTENEDOR<br>\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"col-3 text-center\">\n          <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i><br>\n          CONTENEDOR<br>\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"col-3 text-center\">\n          <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i><br>\n          CONTENEDOR<br>\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/formatos/formatos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormatosComponent = (function () {
    function FormatosComponent() {
    }
    FormatosComponent.prototype.ngOnInit = function () {
    };
    FormatosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-formatos',
            template: __webpack_require__("../../../../../src/app/formatos/formatos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/formatos/formatos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormatosComponent);
    return FormatosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p>You're logged in with Angular 2/5 and Angular CLI!!</p>\n    <h3>All registered users:</h3>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.username}} ({{user.firstName}} {{user.lastName}})\n            - <a (click)=\"deleteUser(user.id)\">Delete</a>\n        </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["i" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin\n{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-signin .form-signin-heading, .form-signin .checkbox\n{\n    margin-bottom: 10px;\n}\n\n.form-signin .checkbox\n{\n    font-weight: normal;\n}\n\n.form-signin .form-control\n{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus\n{\n    z-index: 2;\n}\n\n.form-signin input[type=\"text\"]\n{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.form-signin input[type=\"password\"]\n{\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.account-wall\n{\n    margin-top: 20px;\n    padding: 40px 20px;\n    background-color: #f7f7f7;\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    border-top: 7px solid #68124a;\n}\n\n.login-title\n{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n\n.profile-img\n{\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n}\n\n.need-help\n{\n    margin-top: 10px;\n}\n\n.new-account\n{\n    display: block;\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-sm-6 col-md-4 mb-5\">\n          <!-- <h1 class=\"text-center login-title\">Sign in to continue to Bootsnipp</h1> -->\n          <div class=\"account-wall\">\n              <img class=\"profile-img img-fluid\" src=\"https://www.carrerasenlinea.mx/logos/original/logo-instituto-politecnico-nacional.png\"\n                  alt=\"\">\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                        <label for=\"username\">Usuario</label>\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required autofocus />\n                        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Usuario es requerido</div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label for=\"password\">Contraseña</label>\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\" style=\"background-color: #68124a; border:none;\">\n                            Ingresar\n                        </button>\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Registrar</a>\n                    </div>\n                </form>\n          </div>\n          <!-- <a [routerLink]=\"['realizar-pedido']\" class=\"text-center new-account\">Crear cuenta.</a> -->\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            console.log('data');
            console.log(data.tipo);
            if (data.tipo === 'Administrador') {
                _this.router.navigate(['/admin/usuario/listar-todos']);
            }
            else {
                if (data.tipo === 'Administrador') {
                    _this.router.navigate(['/admin/usuario/listar-todos']);
                }
                else if ((data.tipo === 'Capturista' || data.tipo === 'Responsable') && data.no_pedidos > 0) {
                    _this.router.navigate(['/solicitudes']);
                }
                else {
                    _this.router.navigate([_this.returnUrl]);
                }
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pedidos/pedidos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pedidos/pedidos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"row\">\n  <div class=\"col-12 text-center mb-5 mt-4\">\n    <div class=\"d-flex justify-content-between\">\n      <div>&nbsp;</div>\n      <div>\n        <h1>Solicitudes de Insumos Por Centro o Unidad Academica</h1>\n      </div>\n      <div>\n      </div>\n    </div>\n    <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre la unidad o centro.\">\n  </div>\n  <div class=\"col-sm-4 mb-3\" *ngFor=\"let pedido of pedidos\">\n    <div class=\"card text-center\">\n      <div class=\"card-block p-2\">\n        <h3 class=\"card-title\">{{ pedido.unidad.sigla }}</h3>\n        <p class=\"card-text\">\n          <br> {{ pedido.unidad.nombre }}\n          <br> {{ pedido.creado }}\n          <br> Articulos: {{ pedido.articulos.length }}\n        </p>\n        <a class=\"btn btn-primary\" [routerLink]=\"[ '/solicitud/seguimiento', pedido._id ]\">Seguimiento</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pedidos/pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidosComponent = (function () {
    function PedidosComponent(pedidoService) {
        this.pedidoService = pedidoService;
    }
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidoService.obtenerCatalogoPedidos().subscribe(function (pedidos) {
            _this.pedidos = pedidos;
        });
    };
    PedidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__("../../../../../src/app/pedidos/pedidos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pedidos/pedidos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["e" /* PedidoService */]])
    ], PedidosComponent);
    return PedidosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["i" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1 class=\"text-center\">Reporte Anexo Tecnico</h1>\n    <hr>\n  </div>\n  <div class=\"col-12\" *ngFor=\"let categoria of categorias\">\n    <h3 class=\"text-center\">{{ categoria.nombre }}</h3>\n    <table class=\"table table-striped\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>#</th>\n          <th>CANTIDAD</th>\n          <th>TIPO</th>\n          <th>DESCRIPCIÓN TÉCNICA</th>\n          <th>UNIDAD REQUIRENTE</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let articulo of categoria.productos; let i = index\">\n          <td align=\"center\" class=\"align-middle\">\n            {{ i + 1 }}\n          </td>\n          <td align=\"center\" class=\"align-middle\">\n            {{ articulo.cantidad }}\n          </td>\n          <td align=\"center\" class=\"align-middle\">\n            {{ articulo._id.categoria }}\n            <br> {{ articulo._id.nombre }}\n          </td>\n          <td>\n            <ul>\n              <li *ngFor=\"let caracteristica of articulo._id.propiedades\">\n                {{ caracteristica.nombre }} : {{ caracteristica.valor }}\n              </li>\n            </ul>\n          </td>\n          <td>\n            <li *ngFor=\"let escuela of articulo.escuelas\">\n              <a [routerLink]=\"[ '/admin/pedidos/', escuela.pedido_id ]\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"VER SOLICITUD DE {{ escuela.nombre }}\">\n                {{ escuela.sigla }} ({{ escuela.cantidad }})\n              </a>\n            </li>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteAnexoTecnicoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReporteAnexoTecnicoComponent = (function () {
    function ReporteAnexoTecnicoComponent(reportesService) {
        this.reportesService = reportesService;
        this.obtenerReporte();
    }
    ReporteAnexoTecnicoComponent.prototype.obtenerReporte = function () {
        var _this = this;
        this.reportesService.obtenerReporteAnexoTecnico().subscribe(function (data) {
            _this.categorias = data;
        }).closed;
    };
    ReporteAnexoTecnicoComponent.prototype.ngOnInit = function () {
    };
    ReporteAnexoTecnicoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-anexo-tecnico',
            template: __webpack_require__("../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reporte-anexo-tecnico/reporte-anexo-tecnico.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["f" /* ReportesService */]])
    ], ReporteAnexoTecnicoComponent);
    return ReporteAnexoTecnicoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <ol>\n      <li *ngFor=\"let articulo of articulos; let i = index\">\n        {{ articulo.total }}\n        {{ articulo._id.categoria }}\n        {{ articulo._id.nombre }}\n        <ul>\n          <li *ngFor=\"let unidad of articulo.unidades; let i = index\">\n            {{ unidad.cantidad }} para\n            {{ unidad.unidad }}\n          </li>\n        </ul>\n      </li>\n    </ol> \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteEstudioFactibilidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReporteEstudioFactibilidadComponent = (function () {
    function ReporteEstudioFactibilidadComponent(reportesService) {
        this.reportesService = reportesService;
        this.obtenerReporte();
    }
    ReporteEstudioFactibilidadComponent.prototype.obtenerReporte = function () {
        var _this = this;
        this.reportesService.obtenerReporteEstudioFactibilidad().subscribe(function (data) {
            _this.articulos = data;
        }).closed;
    };
    ReporteEstudioFactibilidadComponent.prototype.ngOnInit = function () {
    };
    ReporteEstudioFactibilidadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-estudio-factibilidad',
            template: __webpack_require__("../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reporte-estudio-factibilidad/reporte-estudio-factibilidad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["f" /* ReportesService */]])
    ], ReporteEstudioFactibilidadComponent);
    return ReporteEstudioFactibilidadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reporte/reporte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporte/reporte.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"row\">\n  <div class=\"col-12 text-center mb-5 mt-4\">\n    <div class=\"d-flex justify-content-center\">\n      <div>\n          <h1>Reportes Disponibles</h1>\n      </div>\n    </div>\n    <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre del usuario o unidad de adscripción\">\n  </div>\n  <div class=\"col-sm-4 mb-3\">\n    <div class=\"card text-center\">\n      <div class=\"card-block p-2\">\n        <h3 class=\"card-title\">ANEXO TECNICO</h3>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/admin/reporte/anexo-tecnico']\">GENERAR</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 mb-3\">\n    <div class=\"card text-center\">\n      <div class=\"card-block p-2\">\n        <h3 class=\"card-title\">ESTUDIO DE FACTIBILIDAD</h3>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/admin/reporte/estudio-factibilidad']\">GENERAR</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reporte/reporte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReporteComponent = (function () {
    function ReporteComponent() {
    }
    ReporteComponent.prototype.ngOnInit = function () {
    };
    ReporteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__("../../../../../src/app/reporte/reporte.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reporte/reporte.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReporteComponent);
    return ReporteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n  list-style: none;\n  padding: 20px 0 20px;\n  position: relative;\n}\n\n  .timeline:before {\n      top: 0;\n      bottom: 0;\n      position: absolute;\n      content: \" \";\n      width: 3px;\n      background-color: #eeeeee;\n      left: 50%;\n      margin-left: -1.5px;\n  }\n\n  .timeline > li {\n      margin-bottom: 20px;\n      position: relative;\n  }\n\n  .timeline > li:before,\n      .timeline > li:after {\n          content: \" \";\n          display: table;\n      }\n\n  .timeline > li:after {\n          clear: both;\n      }\n\n  .timeline > li:before,\n      .timeline > li:after {\n          content: \" \";\n          display: table;\n      }\n\n  .timeline > li:after {\n          clear: both;\n      }\n\n  .timeline > li > .timeline-panel {\n          width: 46%;\n          float: left;\n          border: 1px solid #d4d4d4;\n          border-radius: 2px;\n          padding: 20px;\n          position: relative;\n          -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n      }\n\n  .timeline > li > .timeline-panel:before {\n              position: absolute;\n              top: 26px;\n              right: -15px;\n              display: inline-block;\n              border-top: 15px solid transparent;\n              border-left: 15px solid #ccc;\n              border-right: 0 solid #ccc;\n              border-bottom: 15px solid transparent;\n              content: \" \";\n          }\n\n  .timeline > li > .timeline-panel:after {\n              position: absolute;\n              top: 27px;\n              right: -14px;\n              display: inline-block;\n              border-top: 14px solid transparent;\n              border-left: 14px solid #fff;\n              border-right: 0 solid #fff;\n              border-bottom: 14px solid transparent;\n              content: \" \";\n          }\n\n  .timeline > li > .timeline-badge {\n          color: #fff;\n          width: 50px;\n          height: 50px;\n          line-height: 50px;\n          font-size: 1.4em;\n          text-align: center;\n          position: absolute;\n          top: 16px;\n          left: 50%;\n          margin-left: -25px;\n          background-color: #999999;\n          z-index: 100;\n          border-top-right-radius: 50%;\n          border-top-left-radius: 50%;\n          border-bottom-right-radius: 50%;\n          border-bottom-left-radius: 50%;\n      }\n\n  .timeline > li.timeline-inverted > .timeline-panel {\n          float: right;\n      }\n\n  .timeline > li.timeline-inverted > .timeline-panel:before {\n              border-left-width: 0;\n              border-right-width: 15px;\n              left: -15px;\n              right: auto;\n          }\n\n  .timeline > li.timeline-inverted > .timeline-panel:after {\n              border-left-width: 0;\n              border-right-width: 14px;\n              left: -14px;\n              right: auto;\n          }\n\n  .timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n  .timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n  .timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n  .timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n  .timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n  .timeline-title {\n  font-size: 18px;\n  margin-top: 0;\n  color: inherit;\n}\n\n  .timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n\n  .timeline-body > p + p {\n      margin-top: 5px;\n  }\n\n  @media (max-width: 767px) {\n  ul.timeline:before {\n      left: 40px;\n  }\n\n  ul.timeline > li > .timeline-panel {\n      width: calc(100% - 90px);\n      width: -webkit-calc(100% - 90px);\n  }\n\n  ul.timeline > li > .timeline-badge {\n      left: 15px;\n      margin-left: 0;\n      top: 16px;\n  }\n\n  ul.timeline > li > .timeline-panel {\n      float: right;\n  }\n\n      ul.timeline > li > .timeline-panel:before {\n          border-left-width: 0;\n          border-right-width: 15px;\n          left: -15px;\n          right: auto;\n      }\n\n      ul.timeline > li > .timeline-panel:after {\n          border-left-width: 0;\n          border-right-width: 14px;\n          left: -14px;\n          right: auto;\n      }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado-usuario></app-encabezado-usuario>\n<div class=\"row\">\n  <div class=\"col-12 text-center mt-5 mb-3\">\n    <h1>PROCESO DE VALIDACIÓN</h1>\n    <!--\n    <pre>\n      {{ solicitud | json }}\n    </pre>\n    -->\n  </div>\n  <div class=\"col-6\">\n    <h3 class=\"text-center\">Unidad Requirente</h3>\n    <table class=\"table table-striped\" *ngIf=\"solicitud\">\n      <tr>\n        <td>NOMBRE</td>\n        <td>{{ solicitud.unidad.nombre }}</td>\n      </tr>\n      <tr>\n        <td>SIGLA</td>\n        <td>{{ solicitud.unidad.sigla }}</td>\n      </tr>\n      <tr>\n        <td>DIRECCIÓN</td>\n        <td>{{ solicitud.unidad.direccion }}</td>\n      </tr>\n    </table>\n\n    <h3 class=\"text-center\">Progreso de validación</h3>\n    <ul class=\"timeline\">\n      <li *ngIf=\"solicitud && solicitud.elaboro && solicitud.elaboro.fecha != null\">\n        <div class=\"timeline-badge bg-success\">\n          <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">Solicitud Presentada por Jefe de UDI</h4>\n            <p>\n              <small class=\"text-muted\">\n                <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{ solicitud.elaboro.fecha }}</small>\n            </p>\n          </div>\n          <div class=\"timeline-body\">\n            <p>{{ solicitud.elaboro.nombre }}</p>\n          </div>\n        </div>\n      </li>\n\n      <li class=\"timeline-inverted\" *ngIf=\"solicitud && solicitud.autorizo && solicitud.autorizo.fecha != null\">\n        <div class=\"timeline-badge bg-success\">\n          <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">Validacion por director de la Unidad.</h4>\n            <p>\n              <small class=\"text-muted\">\n                <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{ solicitud.autorizo.fecha }}</small>\n            </p>\n          </div>\n          <div class=\"timeline-body\">\n            <p>{{ solicitud.autorizo.nombre }}</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n    <div class=\"p-3 mb-2 bg-success text-white\" *ngIf=\"solicitud && solicitud.autorizo && solicitud.autorizo.fecha != null\">\n      <h3 class=\"text-center\">\n        <i class=\"fa fa-truck\" aria-hidden=\"true\"></i><br>\n        La solicitud esta lista para ser enviada a tu unidad.\n      </h3>\n    </div>\n  </div>\n  <!--\n  <div class=\"col-6\">\n    <pre>\n      {{ solicitud | json  }}\n    </pre>\n  </div>\n  -->\n  <div class=\"col-6\">\n    <h3 class=\"text-center\">Articulos Solicitados</h3>\n    <table class=\"table table-striped\">\n      <thead class=\"thead-dark\">\n        <th>CANTIDAD</th>\n        <th>TIPO</th>\n        <th>DESCRIPCIÓN TÉCNICA</th>\n      </thead>\n      <tr *ngFor=\"let articulo of solicitud.articulos;\">\n        <td>\n          {{ articulo.cantidad }}\n        </td>\n        <td>\n          {{ articulo.categoria }} {{ articulo.nombre }}\n        </td>\n        <td>\n          <ul *ngFor=\"let propiedad of articulo.propiedades\">\n            <li>{{ propiedad.valor }}: {{ propiedad.nombre }}</li>\n          </ul>\n        </td>\n      </tr>\n      <!--\n      -->\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudSeguimientoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudSeguimientoComponent = (function () {
    function SolicitudSeguimientoComponent(pedidoService, route, router) {
        this.pedidoService = pedidoService;
        this.route = route;
        this.router = router;
    }
    SolicitudSeguimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.route.snapshot.params.pedido_id);
        this.pedidoService.obtenerPedidoPorId(this.route.snapshot.params.pedido_id).subscribe(function (solicitud) {
            _this.solicitud = solicitud;
            // this.toastr.info('¡Usuario modificado con exito!.', '¡Exito!');
            //this.router.navigate(['/admin/usuario/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    SolicitudSeguimientoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-solicitud-seguimiento',
            template: __webpack_require__("../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solicitud-seguimiento/solicitud-seguimiento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SolicitudSeguimientoComponent);
    return SolicitudSeguimientoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solicitud-validar/solicitud-validar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*div.container{\n    background-color: white;\n    box-shadow: 0px 3px 10px lightgray;\n}*/\n\nbutton>i.fa{\n    font-size: 25px\n}\n\n.acciones-producto{\n    font-size: 50px\n}\n\n.acciones-producto button.validar{\n    background: none;\n    color: green;\n}\n\n.acciones-producto button.rechazar{\n    background: none;\n    color: red;\n}\n\n.acciones-producto button i{\n font-size: 60px;\n}\n\n.resumen-pedido{\n    /*background-color: #474ce2;*/\n    background: -webkit-gradient(linear, right top, left top, from(#e469f9), color-stop(#905aed),to(#474ce2));\n    background: linear-gradient(-90deg, #e469f9, #905aed,#474ce2);\n    /*width: 100%;*/\n    color: white;\n    display: block;\n    padding: 40px;\n    /*min-height: 80px;*/\n}\n\nbutton.validar-solicitud{\n    background-color: white;\n    border: none;\n    color: #737373;\n    font-weight: bolder;\n    padding: 20px 30px;\n}\n\n.mostrar-detalle{\n    background-color: white;\n    border: none;\n}\n\n.nombre-atributo{\n    text-align: right;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitud-validar/solicitud-validar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado-usuario></app-encabezado-usuario>\n<div class=\"row\">\n    <div class=\"col-12 text-center mb-5 mt-4\">\n        <h2 class=\"text-center\">VALIDAR SOLICITUD DE INSUMOS INFORMATICOS</h2>\n        <!-- \n            <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n            EXPANDIR\n            <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\n            CONTRAER\n            <div class=\"btn-group\" data-toggle=\"buttons\">\n                <label class=\"btn btn-secondary active\">\n                    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Todos\n                </label>\n                <label class=\"btn btn-secondary\">\n                    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Individual\n                </label>\n            </div>\n        -->\n    </div>\n    <div class=\"col-12\">\n        <div class=\"row\">\n            <div class=\"col-12\" *ngIf=\"pedido\">\n                <table class=\"table\" *ngFor=\"let articulo of pedido.articulos; let i = index;\">\n                    <tr>\n                        <td>\n                            <div *ngIf=\"articulo.validacion && articulo.validacion.responsable.fecha != null\" class=\"p-3 mb-2 bg-success text-white\">VALIDADO</div>\n                            <div *ngIf=\"!articulo.validacion\" class=\"p-3 mb-2 bg-secondary text-white\">POR VALIDAR</div>\n                        </td>\n                        <!--\n                        <td>\n                            <button class=\"mostrar-detalle\">\n                                <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n                            </button>\n                        </td>\n                        -->\n                        <td>\n                            Nombre del articulo:\n                            <br> {{ articulo.categoria }} {{ articulo.nombre }}\n                        </td>\n                        <td>\n                            Cantidad\n                            <br>\n                            <input class=\"form-control\" type=\"number\" step=\"1\" [(ngModel)]=\"articulo.cantidad\">\n                        </td>\n                        <td>\n                            <div class=\"acciones-producto\">\n                                <table class=\"table\">\n                                    <tr>\n                                        <td>\n                                            <button class=\"rechazar\" (click)=\"rechazarArticulo(i)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Rechazar solicitud de 3 piezas de CCD módulo escáner\">\n                                                <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n                                            </button>\n                                            <button class=\"validar\" (click)=\"aprobarArticulo(i)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Validar solicitud de 3 piezas de CCD módulo escáner\">\n                                                <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let caracteristica of articulo.propiedades\" style=\"display:none\">\n                        <td colspan=\"4\" style=\"background-color: #f2f4f3\">\n                            <table class=\"table\" style=\"background-color: #f2f4f3\">\n                                <tr>\n                                    <td class=\"nombre-atributo\">{{ caracteristica.nombre }}</td>\n                                    <td>{{ caracteristica.valor }}</td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"col-12 resumen-pedido\">\n                <div class=\"row\" *ngIf=\"pedido\">\n                    <div class=\"col-8\">\n                        RESUMEN -- {{ porcentaje_validacion }}\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"porcentaje_validacion\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                aria-valuemax=\"100\"></div>\n                        </div>\n                        <span *ngIf=\"pedido\">Se han validado {{ no_articulos_validados }} de {{ pedido.articulos.length }} productos</span>\n                    </div>\n                    <div class=\"col-4 text-right\">\n                        <button class=\"validar-solicitud\" [disabled]=\"porcentaje_validacion < 100\" (click)=\"validarPedido()\">\n                            Validar Pedido\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--\n    <div class=\"col-4\">\n        <pre *ngIf=\"pedido\">\n            {{ pedido | json }}\n        </pre>\n    </div>\n    -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/solicitud-validar/solicitud-validar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudValidarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudValidarComponent = (function () {
    function SolicitudValidarComponent(ruta, router, solicitudValidarService, autentificacionService) {
        var _this = this;
        this.ruta = ruta;
        this.router = router;
        this.solicitudValidarService = solicitudValidarService;
        this.autentificacionService = autentificacionService;
        this.porcentaje_validacion = 0;
        // Obtiene los datos del pedido indicado en la URL
        this.ruta.params.subscribe(function (params) {
            _this.pedido_id = params['pedido_id'];
            _this.solicitudValidarService.buscarPedido(_this.pedido_id).subscribe(function (data) {
                _this.pedido = data;
                _this.responsable = _this.autentificacionService.getUserInfo();
                _this.pedido.autorizo = {
                    '_id': _this.responsable._id,
                    'nombre': _this.responsable.nombre,
                    'fecha': new Date()
                };
                _this.actualizarPorcentajeDeProgreso();
            });
        });
    }
    SolicitudValidarComponent.prototype.ngOnInit = function () {
    };
    SolicitudValidarComponent.prototype.aprobarArticulo = function (indice_articulo) {
        // console.log(_event.target);
        // console.log(this.responsable);
        this.pedido.articulos[indice_articulo].validacion = {
            valor: true,
            responsable: {
                _id: this.responsable._id,
                nombre: this.responsable.nombre,
                fecha: new Date().toDateString()
            }
        };
        this.actualizarPorcentajeDeProgreso();
    };
    SolicitudValidarComponent.prototype.rechazarArticulo = function (indice_articulo) {
        this.pedido.articulos[indice_articulo].validacion = {
            valor: false,
            responsable: {
                _id: this.responsable._id,
                nombre: this.responsable.nombre,
                fecha: new Date().toDateString()
            }
        };
        this.actualizarPorcentajeDeProgreso();
    };
    SolicitudValidarComponent.prototype.validarPedido = function () {
        var _this = this;
        // console.log("El pedido antes de enviar");
        // console.log(this.pedido);
        this.solicitudValidarService.validarPedido(this.pedido)
            .subscribe(function (response) {
            //console.log("La respuesta");
            // console.log(response);
            _this.router.navigate(['/solicitudes']);
        });
    };
    SolicitudValidarComponent.prototype.actualizarPorcentajeDeProgreso = function () {
        var no_articulos = this.pedido.articulos.length;
        this.no_articulos_validados = 0;
        for (var _i = 0; _i < no_articulos; _i++) {
            if (this.pedido.articulos[_i].validacion) {
                this.no_articulos_validados++;
            }
        }
        this.porcentaje_validacion = Math.round((this.no_articulos_validados * 100) / no_articulos);
    };
    SolicitudValidarComponent.prototype.validarSolicitud = function () {
        this.pedido.autorizo = {
            _id: null,
            nombre: null,
            fecha: null
        };
    };
    SolicitudValidarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-solicitud-validar',
            template: __webpack_require__("../../../../../src/app/solicitud-validar/solicitud-validar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solicitud-validar/solicitud-validar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["g" /* SolicitudValidarService */],
            __WEBPACK_IMPORTED_MODULE_2_app_services__["c" /* AuthenticationService */]])
    ], SolicitudValidarComponent);
    return SolicitudValidarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solicitud/solicitud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".realizar-solicitud{\n    padding-top: 30px;\n    padding-bottom: 80px;\n}\n\n/*CUSTOM SEARCH BOX*/\n\n#busqueda {\n    margin:0;\n    margin-top: 10px;\n    padding: 0;\n}\n\n#busqueda .consulta {\n    padding: 20px;\n    margin-bottom: 0;\n    border-radius: 3px;\n}\n\n#busqueda button {\n    border: 0;\n    background: none;\n    /** belows styles are working good */\n    padding: 2px 5px;\n    margin-top: 2px;\n    position: relative;\n    left: -28px;\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\n    margin-bottom: 0;\n    border-radius: 3px;\n    color:#D9230F;\n}\n\n.consulta:focus + button {\n    z-index: 3;   \n}\n\ndiv.container>div.row{\n    background-color: white;\n}\n\ndiv.resumen-pedido{\n    border: 2px solid #e9eaea;\n    border-radius: 5px;\n    padding: 10px;\n    border-top: 5px solid #68124a;\n}\n\n.terminar-solicitud{\n    background-color: #68124a;\n    border: none;\n    color: white;\n    width: 100%;\n    -webkit-box-shadow: 0px 3px 3px #adadad;\n            box-shadow: 0px 3px 3px #adadad;\n}\n\n.articulo{\n    border: 1px solid lightgray;\n    border-top: 2px solid #68124a;\n    /*border-radius: 5px;*/\n    padding: 10px;\n    width: 100%;\n    /*margin: px;*/\n    min-height: 100px;\n}\n\n.articulo>button{\n    background-color: #c771a9;\n    border: none;\n    color: white;\n}\n\n/*\ndiv.articulo:hover{\n    border: none;\n    background-color: #75435a;\n    color: white;\n}\n\ndiv.articulo:hover button{\n    background-color: white;\n    cursor: pointer;\n}\n*/\n\ndiv.solicitar-producto{\n    padding: 10px;\n    background-color: #dcdcdc;\n}\n\ndiv.solicitar-producto>button{\n    background-color: #4958d4;\n    color: white;\n    margin-top: 10px;\n}\n\n/*.cabecera-detalle-producto{\n    background-color: #f9f9f9;\n}*/\n\ntd.atributo{\n    background-color: #f7f7f7;\n}\n\nh4.titulo-seccion{\n    color: #6e748f;\n    font-size: 18px;\n    padding-left: 1px;\n}\n\n.eliminar-producto{\n    font-size: 30px;\n    padding: 0;\n    margin: 0;\n    color: #969696;\n}\n\np{\n    color: #9fa4b8;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitud/solicitud.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado-usuario></app-encabezado-usuario>\n<div class=\"row realizar-solicitud\">\n    <div class=\"col-12 text-center\">\n        <div class=\"alert alert-warning\" *ngIf=\"errorHttp\">\n            <h1>Error</h1>\n            <pre>\n                {{ errorHttp | json }}\n            </pre>\n        </div>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"row\">\n            <div class=\"col-12 text-center\">\n                <h1>\n                    Realizar Solicitud\n                </h1>\n            </div>\n            <!-- BUSQUEDA -->\n            <div class=\"col-12\">\n                <hr>\n                <h4 class=\"titulo-seccion\">\n                    1. Ingresa nombre o categoria del producto.\n                </h4>\n                <div id=\"busqueda\">\n                    <div class=\"input-group col-md-12\">\n                        <input id=\"client-search\" type=\"text\" class=\"consulta form-control form-control-lg\" placeholder=\"Buscar por nombre o categoria\"\n                            autofocus />\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-danger\" type=\"button\">\n                                <span class=\"fa fa-search\"></span>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <!-- PRODUCTOS -->\n            <div class=\"col-md-12\">\n                <hr>\n                <h4 class=\"titulo-seccion\">\n                    2. Elige los articulos que deseas agregar en tu pedido.\n                </h4>\n                <p *ngIf=\"catalogoProductos\">\n                    {{ catalogoProductos.length }} articulos del catalogo que contienen la palabra \"{{ terminoDeBusqueda }}\" en el nombre\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-6 text-center\" *ngFor=\"let producto of catalogoProductos; let i = index;\">\n                        <div class=\"articulo mt-3\">\n                            <a [routerLink]=\"['producto/detalles' , producto.id ]\">\n                                {{producto.categoria}}<br>\n                                {{producto.nombre}}\n                            </a>\n                            <br>\n                            <button class=\"btn mt-1\" (click)=\"mostrarDetalleArticulo(producto, i)\" data-toggle=\"modal\" data-target=\"#verDetalleModal\">\n                                <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i> Ver detalle\n                            </button>\n                            <button class=\"btn mt-1\" (click)=\"agregarArticuloAlCarrito(producto)\" data-toggle=\"tooltip\" title=\"Hooray!\">\n                                <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Agregar\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"resumen-pedido\">\n            <h4 class=\"text-center\">\n                Tu solicitud\n                <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n                ({{ pedidoServicio.articulosCarrito.length }})\n            </h4>\n            <hr>\n            <div *ngIf=\"pedidoServicio.articulosCarrito.length > 0\">\n                <table class=\"table\">\n                    <tr *ngFor=\"let articulo of pedidoServicio.articulosCarrito; let i = index;\">\n                        <td width=\"5%\">\n                            <button class=\"btn eliminar-producto\" (click)=\"eliminarProductoCarrito(i)\">\n                                <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n                            </button>\n                        </td>\n                        <td width=\"70%\">\n                            {{ articulo.categoria }} {{ articulo.nombre }}\n                        </td>\n                        <td width=\"25%\">\n                            <button class=\"btn\" (click)=\"sumarArticuloACarrito(i)\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </button>\n                            <input class=\"form-control\" type=\"number\" step=\"1\" [(ngModel)]=\"articulo.cantidad\" min=\"1\">\n                            <button class=\"btn\" (click)=\"restarArticuloACarrito(i)\">\n                                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n                <button class=\"btn terminar-solicitud\" (click)=\"finalizarSolicitud()\">\n                    <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n                    Finalizar Solicitud\n                </button>\n            </div>\n            <div class=\"text-center\" *ngIf=\"pedidoServicio.articulosCarrito.length == 0\">\n                Sin articulos en tu pedido\n                <br>\n                <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n    </div>\n    <!-- \n    <div class=\"col-3\">\n        <pre>\n            {{ pedido | json }}\n        </pre>\n    </div>\n    -->\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"verDetalleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"verDetalleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\" *ngIf=\"detalleArticulo\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\" id=\"verDetalleModalLabel\">\n                    {{ detalleArticulo.nombre }} - {{ detalleArticulo.categoria }}\n                </h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <table class=\"table\">\n                                <tr *ngFor=\"let propiedad of detalleArticulo.propiedades; let i = index;\">\n                                    <td class=\"atributo\" align=\"right\">{{ propiedad.nombre }}</td>\n                                    <td>\n                                        {{ propiedad.valor }}\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        <div class=\"col-12\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"d-flex justify-content-start mb-3\">\n                                        <div class=\"p-2\">\n                                            <button class=\"btn\">\n                                                <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i>\n                                                Anterior\n                                            </button>\n                                        </div>\n                                        <div class=\"p-2\">\n                                            <button class=\"btn\">\n                                                Siguiente\n                                                <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <p class=\"text-center\">Agregar</p>\n                                    <div class=\"d-flex justify-content-end mb-3\">\n                                        <div class=\"p-2\">\n                                            <button class=\"btn\" (click)=\"eliminaProductoDetalleArticulo()\">\n                                                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"p-2\">\n                                            <input class=\"form-control\" type=\"number\" placeholder=\"CANTIDAD\" [(ngModel)]=\"detalleArticulo.cantidad\" min=\"1\" step=\"1\">\n                                        </div>\n                                        <div class=\"p-2\">\n                                            <button class=\"btn\" (click)=\"agregaProductoDetalleArticulo()\">\n                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\">\n                            <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i>\n                            Agregar al pedido\n                        </button>\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Atras</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/solicitud/solicitud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolicitudComponent = (function () {
    function SolicitudComponent(articuloService, router, pedidoServicio, autentificacionService) {
        this.articuloService = articuloService;
        this.router = router;
        this.pedidoServicio = pedidoServicio;
        this.autentificacionService = autentificacionService;
        this.cargando = true;
        this.obtenerCatalogoDeProductos();
        this.inicializarPedido();
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Dynamic typing from search box to filter on client logos
        var enCadaPalabraEscrita = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].fromEvent(document.getElementById('client-search'), 'keyup')
            .map(function (e) { return e.target['value']; })
            .debounceTime(400)
            .distinctUntilChanged();
        enCadaPalabraEscrita.subscribe(function (data) {
            _this.terminoDeBusqueda = data; // Actualiza termino de busqueda
            _this.buscaProductos(_this.terminoDeBusqueda); // Busca producto
        });
        this.cargando = false;
    };
    SolicitudComponent.prototype.obtenerCatalogoDeProductos = function () {
        var _this = this;
        this.pedidoServicio.obtenerCatalogoProductos().subscribe(function (data) {
            console.log(data);
            _this.catalogoProductos = data;
        }).closed;
    };
    SolicitudComponent.prototype.buscaProductos = function (_termino_de_busqueda) {
        var _this = this;
        var token = this.generarToken(_termino_de_busqueda);
        this.pedidoServicio.buscarProductoEnCatalogo(token).subscribe(function (data) {
            _this.catalogoProductos = data;
        }).closed;
    };
    SolicitudComponent.prototype.generarToken = function (_termino_de_busqueda) {
        return _termino_de_busqueda.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '').replace(/[aeiou]/ig, '');
        // verificar cuando replazar numeros  .replace(/[0123456789]/ig,'') por las medidas como 10GB
    };
    SolicitudComponent.prototype.eliminarProductoCarrito = function (_posicion) {
        // alert("Boorar" + _posicion);
        // array.splice(index, 1);
        this.pedidoServicio.borrarArticuloDeCarrito(_posicion);
    };
    SolicitudComponent.prototype.restarArticuloACarrito = function (_posicion) {
        this.pedidoServicio.restarArticuloACarrito(_posicion);
    };
    SolicitudComponent.prototype.sumarArticuloACarrito = function (_posicion) {
        this.pedidoServicio.sumarArticuloACarrito(_posicion);
    };
    SolicitudComponent.prototype.agregarArticuloAlCarrito = function (_articulo) {
        this.pedidoServicio.agregarArticuloAlCarrito(_articulo);
    };
    SolicitudComponent.prototype.mostrarDetalleArticulo = function (_articulo, _posicion) {
        this.detalleArticulo = new __WEBPACK_IMPORTED_MODULE_4_app_models__["b" /* ArticuloCarrito */](_articulo._id, _articulo.nombre, 1, _articulo.token, _articulo.categoria, null, _articulo.propiedades);
    };
    SolicitudComponent.prototype.inicializarPedido = function () {
        var db_usuario = this.autentificacionService.getUserInfo(); // Obtiene informacion del local storage
        var unidad = {
            '_id': db_usuario.unidad._id,
            'clave_ur': db_usuario.unidad.clave_ur,
            'nombre': db_usuario.unidad.nombre,
            'sigla': db_usuario.unidad.sigla,
            'direccion': db_usuario.unidad.direccion
        };
        var elaboro = {
            '_id': db_usuario._id,
            'nombre': db_usuario.nombre,
            'fecha': new Date().toDateString()
        };
        var autorizo = {
            '_id': null,
            'nombre': null,
            'fecha': null
        };
        this.pedido = new __WEBPACK_IMPORTED_MODULE_4_app_models__["d" /* Pedido */](null, null, unidad, elaboro, autorizo, this.pedidoServicio.articulosCarrito);
    };
    SolicitudComponent.prototype.finalizarSolicitud = function () {
        var _this = this;
        this.pedidoServicio.registrarPedido(this.pedido).subscribe(function (data) {
            // console.log(data);
            // this.pedidoServicio.inicializarCarrito();
            // this.inicializarPedido();
            _this.router.navigate(['/solicitudes']);
        });
    };
    SolicitudComponent.prototype.agregaProductoDetalleArticulo = function () {
        this.detalleArticulo.cantidad += 1;
    };
    SolicitudComponent.prototype.eliminaProductoDetalleArticulo = function () {
        if ((this.detalleArticulo.cantidad - 1) > 0) {
            this.detalleArticulo.cantidad -= 1;
        }
        else {
            this.detalleArticulo.cantidad = 1;
        }
    };
    SolicitudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector: 'app-solicitud',
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/solicitud/solicitud.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solicitud/solicitud.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* ArticuloService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* AuthenticationService */]])
    ], SolicitudComponent);
    return SolicitudComponent;
}());



/***/ }),

/***/ "../../../../../src/app/solicitudes/solicitudes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitudes/solicitudes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado-usuario></app-encabezado-usuario>\n<div class=\"row mt-4 mb-5\">\n  <div class=\"col-12 mb-5 mt-4\">\n    <h1 class=\"text-center\">Solicitudes de insumos informaticos.</h1>\n  </div>\n  <div class=\"col-sm-4 mb-3\" *ngFor=\"let pedido of pedidos; let i = index;\">\n    <div class=\"card text-center\">\n      <div class=\"card-block p-2\">\n        <h3 class=\"card-title\">\n          PEDIDO {{ i+1 }} \n          <i *ngIf=\"pedido.autorizo.fecha != null\" style=\"color:green\" _ngcontent-c5=\"\" aria-hidden=\"true\" class=\"fa fa-check-circle-o\"></i>\n        </h3>\n        <p class=\"card-text\">\n          <br> {{ pedido.creado }}\n          <br> Articulos: {{ pedido.articulos.length }}\n        </p>\n        <a class=\"btn btn-primary\" *ngIf=\"informacion_usuario.tipo === 'Responsable'\" [routerLink]=\"[ '/solicitud/validar', pedido._id ]\">Validar</a>\n        <a class=\"btn btn-primary\" [routerLink]=\"[ '/solicitud/seguimiento', pedido._id ]\">Seguimiento</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/solicitudes/solicitudes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudesComponent = (function () {
    function SolicitudesComponent(pedidoService, sesionService) {
        this.pedidoService = pedidoService;
        this.sesionService = sesionService;
    }
    SolicitudesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.informacion_usuario = this.sesionService.getUserInfo();
        this.pedidoService.obtenerPedidosPorUnidad(this.informacion_usuario.unidad.clave_ur).subscribe(function (pedidos) {
            _this.pedidos = pedidos;
        });
    };
    SolicitudesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-solicitudes',
            template: __webpack_require__("../../../../../src/app/solicitudes/solicitudes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solicitudes/solicitudes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["e" /* PedidoService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* AuthenticationService */]])
    ], SolicitudesComponent);
    return SolicitudesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center mb-5 mt-4\">\n      <div class=\"d-flex justify-content-between\">\n        <div>&nbsp;</div>\n        <div>\n          <h1>Centros y Unidades</h1>\n        </div>\n        <div>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/unidad/crear' ]\">CREAR UNIDAD</a>\n        </div>\n      </div>\n      <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre del usuario o unidad de adscripción\">\n    </div>\n    <div class=\"col-sm-4 mb-3\" *ngFor=\"let unidad of unidades\">\n      <div class=\"card text-center\">\n        <div class=\"card-block p-2\">\n          <h3 class=\"card-title\">{{ unidad.clasificacion }}</h3>\n          <p class=\"card-text\">\n            {{ unidad.unidad }}\n          </p>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/unidad/editar', unidad._id ]\">Editar</a>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/unidad/eliminar', unidad._id ]\">Eliminar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadListarTodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnidadListarTodosComponent = (function () {
    function UnidadListarTodosComponent(unidadService) {
        var _this = this;
        this.unidadService = unidadService;
        this.unidadService.obtenerCatalogoUnidades().subscribe(function (unidades) {
            _this.unidades = unidades;
        });
    }
    UnidadListarTodosComponent.prototype.ngOnInit = function () { };
    UnidadListarTodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unidad-listar-todos',
            template: __webpack_require__("../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/unidad-listar-todos/unidad-listar-todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services__["h" /* UnidadService */]])
    ], UnidadListarTodosComponent);
    return UnidadListarTodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/unidad/unidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unidad/unidad.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center\">\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'crear'\">Crear Unidad.</h1>\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'editar'\">Editar Unidad.</h1>\n    </div>\n    <div class=\"offset-2 col-8\" *ngIf=\"unidad\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"clasificacion_unidad\">Nivel</label>\n          <select class=\"form-control\" id=\"clasificacion_unidad\" required (change)=\"obtenerUnidadesPorClasificacion($event)\" name=\"clasificacion\">\n            <option *ngFor=\"let clasificacion of clasificacion_unidades\" [selected]=\"unidad.clasificacion == clasificacion.clasificacion\"\n              [value]=\"unidad.clasificacion\">{{clasificacion.descripcion}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"unidad_id\">Dependencia</label>\n          <select class=\"form-control\" id=\"unidad_id\" required (change)=\"asignarUnidadAUsuario($event)\" name=\"categoria\">\n            <option *ngFor=\"let unidad of unidades\" [selected]=\"unidad.unidad.clave_ur == unidad.clave_ur\" [value]=\"unidad.unidad.nombre\">{{unidad.unidad}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nombre\">Clave UR</label>\n          <input type=\"text\" class=\"form-control\" id=\"clave_ur\" name=\"clave_ur\" [(ngModel)]=\"unidad.clave_ur\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nombre\">Nombre</label>\n          <input id=\"nombre\" name=\"nombre\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidad.unidad\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"unidad\">Sigla</label>\n          <input id=\"sigla\" name=\"sigla\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidad.sigla\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Clase</label>\n          <input id=\"clase_global\" name=\"clase_global\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidad.clase_global\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"clasificacion\">Clasificacion</label>\n          <input id=\"clasificacion\" name=\"clasificacion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidad.clasificacion\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"direccion\">Direccion</label>\n          <textarea id=\"direccion\" name=\"direccion\" class=\"form-control\" [(ngModel)]=\"unidad.direccion\" rows=\"5\"></textarea>\n        </div>\n        <button type=\"submit\" *ngIf=\"accion === 'crear'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"crearUnidad();heroForm.reset();\" [disabled]=\"!heroForm.form.valid\">\n          Crear Unidad\n        </button>\n        <button type=\"submit\" *ngIf=\"accion === 'editar'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"modificarUnidad();\" [disabled]=\"!heroForm.form.valid\">\n          Modificar Unidad\n        </button>\n      </form>\n    </div>\n    <!--\n    <div class=\"col-6\">\n      <pre>\n        {{ unidad | json }}\n      </pre>\n    </div>\n    -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/unidad/unidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnidadComponent = (function () {
    function UnidadComponent(route, router, unidadService) {
        this.route = route;
        this.router = router;
        this.unidadService = unidadService;
        this.obtenerClasificacionUnidades();
        this.obtenerAccionARealizar();
    }
    UnidadComponent.prototype.obtenerClasificacionUnidades = function () {
        var _this = this;
        this.unidadService.obtenerClasificaciones().subscribe(function (data) {
            _this.clasificacion_unidades = data;
        }).closed;
    };
    // Procesa los parametros de la URL para saber si el unidad intenta crear o editar
    UnidadComponent.prototype.obtenerAccionARealizar = function () {
        var _this = this;
        var tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            if (params.unidad_id) {
                _this.unidad_id = params.unidad_id;
            }
        });
        if (tmp_accion === 'crear') {
            this.accion = 'crear';
            this.inicializarUnidad();
        }
        else if (tmp_accion === 'editar') {
            this.accion = 'editar';
            this.unidadService.obtenerUnidadPorId(this.unidad_id).subscribe(function (unidad) {
                _this.unidad = unidad;
                _this.unidadService.obtenerUnidadesPorClasificacion(unidad.clase).subscribe(function (unidades) {
                    _this.unidades = unidades;
                }).closed;
            });
        }
        else if (tmp_accion === 'eliminar') {
            this.accion = 'eliminar';
            this.unidadService.eliminar(this.unidad_id).subscribe(function (response) {
                _this.router.navigate(['/admin/unidad/listar-todos']);
            });
        }
    };
    UnidadComponent.prototype.inicializarUnidad = function () {
        this.unidad = new __WEBPACK_IMPORTED_MODULE_2__models_index__["e" /* Unidad */](null, null, null, null, null, null, null, null);
    };
    UnidadComponent.prototype.obtenerUnidadesPorClasificacion = function (_clasificacion) {
        var _this = this;
        var index = _clasificacion.target.selectedIndex;
        var clasificacion = this.clasificacion_unidades[index].clasificacion;
        this.unidadService.obtenerUnidadesPorClasificacion(clasificacion).subscribe(function (unidades) {
            _this.unidades = unidades;
        }).closed;
    };
    UnidadComponent.prototype.asignarUnidadAUsuario = function (_unidad_event) {
        var index = _unidad_event.target.selectedIndex;
        var unidad = this.unidades[index];
        //console.log(unidad);
        this.unidad._id = unidad._id;
        this.unidad.clave_ur = unidad.clave_ur;
        this.unidad.unidad = unidad.unidad;
        this.unidad.sigla = unidad.sigla;
        this.unidad.clase_global = unidad.clase_global;
        this.unidad.clase = unidad.clase;
        this.unidad.clasificacion = unidad.clasificacion;
        this.unidad.direccion = unidad.direccion;
    };
    UnidadComponent.prototype.modificarUnidad = function () {
        var _this = this;
        this.unidadService.modificarUnidad(this.unidad)
            .subscribe(function (res) {
            _this.router.navigate(['/admin/unidad/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    /*
    asignarUnidadAUnidad(_unidad_event) {
      const index = _unidad_event.target.selectedIndex;
      const unidad: Unidad = this.unidades[index];
      //console.log(unidad);
      this.unidad.unidad._id = unidad._id;
      this.unidad.unidad.clave_ur = unidad.clave_ur;
      this.unidad.unidad.direccion = '';
      this.unidad.unidad.nombre = unidad.unidad;
      this.unidad.unidad.clasificacion = unidad.clase;
      this.unidad.unidad.sigla = unidad.sigla;
  
      this.unidad.tipo = 'unidad';
      this.unidad.status = 'activo';
    }
    */
    UnidadComponent.prototype.crearUnidad = function () {
        var _this = this;
        this.unidadService.crearUnidad(this.unidad).subscribe(function (res) {
            console.log(res);
            _this.inicializarUnidad();
        }, function (err) {
            console.log(err);
        });
    };
    UnidadComponent.prototype.ngOnInit = function () {
    };
    UnidadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unidad',
            template: __webpack_require__("../../../../../src/app/unidad/unidad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/unidad/unidad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* UnidadService */]])
    ], UnidadComponent);
    return UnidadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 130px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid #cccccc;\n    border-radius: 6px;\n    font-size: 16px;\n    background-color: white;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center mb-5 mt-4\">\n      <div class=\"d-flex justify-content-between\">\n        <div>&nbsp;</div>\n        <div>\n          <h1>Usuarios</h1>\n        </div>\n        <div>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/usuario/crear' ]\">CREAR USUARIO</a>\n        </div>\n      </div>\n      <input type=\"text\" name=\"search\" placeholder=\"Buscar por nombre del usuario o unidad de adscripción\">\n    </div>\n    <div class=\"col-sm-4 mb-3\" *ngFor=\"let usuario of usuarios\">\n      <div class=\"card text-center\">\n        <div class=\"card-block p-2\">\n          <h3 class=\"card-title\">{{ usuario.nombre }}</h3>\n          <p class=\"card-text\">\n            {{ usuario.unidad.sigla }}\n          </p>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/usuario/editar', usuario._id ]\">Editar</a>\n          <a class=\"btn btn-primary\" [routerLink]=\"[ '/admin/usuario/eliminar', usuario._id ]\">Eliminar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioListarTodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioListarTodosComponent = (function () {
    function UsuarioListarTodosComponent(usuarioService, toastr) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.toastr = toastr;
        this.usuarioService.obtenerCatalogoUsuarios().subscribe(function (usuarios) {
            _this.usuarios = usuarios;
        });
    }
    UsuarioListarTodosComponent.prototype.ngOnInit = function () { };
    UsuarioListarTodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usuario-listar-todos',
            template: __webpack_require__("../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usuario-listar-todos/usuario-listar-todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services__["j" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], UsuarioListarTodosComponent);
    return UsuarioListarTodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usuario/usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usuario/usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center\">\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'crear'\">Crear Usuario.</h1>\n      <h1 class=\"mb-4 mt-4\" *ngIf=\"accion === 'editar'\">Editar Usuario.</h1>\n    </div>\n    <div class=\"offset-2 col-8\" *ngIf=\"usuario\">\n      <form #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"clasificacion_unidad\">Nivel</label>\n          <select class=\"form-control\" id=\"clasificacion_unidad\" required (change)=\"obtenerUnidadesPorClasificacion($event)\" name=\"categoria\">\n            <option *ngFor=\"let clasificacion of clasificacion_unidades\" [selected]=\"usuario.unidad.clasificacion == clasificacion.clasificacion\"\n              [value]=\"usuario.unidad.clasificacion\">{{clasificacion.descripcion}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"unidad_id\">Dependencia</label>\n          <select class=\"form-control\" id=\"unidad_id\" required (change)=\"asignarUnidadAUsuario($event)\" name=\"categoria\">\n            <option *ngFor=\"let unidad of unidades\" [selected]=\"usuario.unidad.clave_ur == unidad.clave_ur\" [value]=\"usuario.unidad.nombre\">{{unidad.unidad}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nombre\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"usuario.nombre\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input id=\"email\" name=\"email\" type=\"text\" class=\"form-control\" [(ngModel)]=\"usuario.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"tipo\">Tipo</label>\n          <select class=\"form-control\" name=\"tipo\" id=\"tipo\" [(ngModel)]=\"usuario.tipo\">\n            <option value=\"Capturista\">Capturista</option>\n            <option value=\"Responsable\">Responsable</option>\n            <option value=\"Administrador\">Administrador</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"usuario\">Usuario</label>\n          <input id=\"usuario\" name=\"usuario\" type=\"text\" class=\"form-control\" [(ngModel)]=\"usuario.usuario\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Contraseña</label>\n          <input id=\"password\" name=\"password\" type=\"text\" class=\"form-control\" [(ngModel)]=\"usuario.password\">\n        </div>\n        <button type=\"submit\" *ngIf=\"accion === 'crear'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"crearUsuario();heroForm.reset();\"\n          [disabled]=\"!heroForm.form.valid\">\n          Crear Usuario\n        </button>\n        <button type=\"submit\" *ngIf=\"accion === 'editar'\" class=\"btn btn-primary btn-lg btn-block mb-4\" (click)=\"modificarUsuario();\"\n          [disabled]=\"!heroForm.form.valid\">\n          Guardar Modificaciones al Usuario\n        </button>\n      </form>\n    </div>\n    <!--\n      <div class=\"col-6\">\n        <pre>{{ usuario | json}}</pre>\n      </div>\n    -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/usuario/usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioComponent = (function () {
    function UsuarioComponent(route, router, usuarioService, unidadService, toastr, _vcr) {
        this.route = route;
        this.router = router;
        this.usuarioService = usuarioService;
        this.unidadService = unidadService;
        this.toastr = toastr;
        this._vcr = _vcr;
        this.obtenerClasificacionUnidades();
        this.obtenerAccionARealizar();
        this.toastr.setRootViewContainerRef(_vcr);
    }
    // Procesa los parametros de la URL para saber si el usuario intenta crear o editar
    UsuarioComponent.prototype.obtenerAccionARealizar = function () {
        var _this = this;
        var tmp_accion = this.route.snapshot.url[2].path && this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            if (params.usuario_id) {
                _this.usuario_id = params.usuario_id;
            }
        });
        if (tmp_accion === 'crear') {
            this.accion = 'crear';
            this.inicializarUsuario();
        }
        else if (tmp_accion === 'editar') {
            this.accion = 'editar';
            this.usuarioService.obtenerUsuarioPorId(this.usuario_id).subscribe(function (usuario) {
                _this.usuario = usuario;
                _this.unidadService.obtenerUnidadesPorClasificacion(usuario.unidad.clasificacion).subscribe(function (unidades) {
                    _this.unidades = unidades;
                }).closed;
            });
        }
        else if (tmp_accion === 'eliminar') {
            this.accion = 'eliminar';
            this.usuarioService.eliminar(this.usuario_id).subscribe(function (response) {
                _this.router.navigate(['/admin/usuario/listar-todos']);
            });
        }
    };
    UsuarioComponent.prototype.inicializarUsuario = function () {
        var unidad = {
            _id: null,
            clave_ur: null,
            nombre: null,
            sigla: null,
            clasificacion: null,
            direccion: null
        };
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_index__["f" /* Usuario */](null, null, null, null, null, unidad, null, null, null);
    };
    UsuarioComponent.prototype.modificarUsuario = function () {
        var _this = this;
        this.usuarioService.modificarUsuario(this.usuario)
            .subscribe(function (res) {
            _this.toastr.info('¡Usuario modificado con exito!.', '¡Exito!');
            //this.router.navigate(['/admin/usuario/listar-todos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    UsuarioComponent.prototype.obtenerClasificacionUnidades = function () {
        var _this = this;
        this.unidadService.obtenerClasificaciones().subscribe(function (data) {
            _this.clasificacion_unidades = data;
        }).closed;
    };
    UsuarioComponent.prototype.obtenerUnidadesPorClasificacion = function (_clasificacion) {
        var _this = this;
        var index = _clasificacion.target.selectedIndex;
        var clasificacion = this.clasificacion_unidades[index].clasificacion;
        this.unidadService.obtenerUnidadesPorClasificacion(clasificacion).subscribe(function (unidades) {
            _this.unidades = unidades;
        }).closed;
    };
    UsuarioComponent.prototype.asignarUnidadAUsuario = function (_unidad_event) {
        var index = _unidad_event.target.selectedIndex;
        var unidad = this.unidades[index];
        this.usuario.unidad._id = unidad._id;
        this.usuario.unidad.clave_ur = unidad.clave_ur;
        this.usuario.unidad.direccion = unidad.direccion;
        this.usuario.unidad.nombre = unidad.unidad;
        this.usuario.unidad.clasificacion = unidad.clase;
        this.usuario.unidad.sigla = unidad.sigla;
        this.usuario.tipo = 'unidad';
        this.usuario.status = 'activo';
    };
    UsuarioComponent.prototype.crearUsuario = function () {
        var _this = this;
        this.usuarioService.crearUsuario(this.usuario).subscribe(function (res) {
            _this.inicializarUsuario();
            // this.router.navigate(['/admin/usuario/listar-todos']);
            _this.toastr.success('¡Usuario creado con exito!.', '¡Exito!');
        }, function (err) {
            console.log(err);
        });
    };
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__("../../../../../src/app/usuario/usuario.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["j" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* UnidadService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map