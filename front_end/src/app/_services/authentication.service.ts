import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from 'app/_models';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    API_URL: string;

    constructor(private http: HttpClient) {
        if (environment.production) {
            this.API_URL = 'http://' + environment.api_url + ':8000/';
        } else if (environment.production === false) {
            this.API_URL = 'http://' + environment.dev_api_url + ':8000/';
        }
    }

    login(usuario: string, password: string) {
        return this.http.post<any>(this.API_URL + 'api/usuarios/login', { usuario: usuario, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    getUserInfo(): Usuario {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
