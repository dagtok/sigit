import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subcategoria } from '../_models/index';

@Injectable()
export class SubcategoriaService {
  URL:string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:4200/assets/json/subcategorias.json';
  }

  public listar() {
    return this.http.get(this.URL);
  }

}
