import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

  resultado:Array<Categoria>;
  URL:string;
  
  constructor(private http: HttpClient) {
    this.resultado = [];
    this.URL = 'http://localhost:4200/assets/json/categorias.json';
  }
  
  agregarArticulo(_nuevoArticulo){
    this.resultado.push(_nuevoArticulo);
  }
  
  mostrarArticulos(){
    if(this.resultado.length > 0){
      return this.resultado;
    } else {
      return false;
    }
  }

  public crear(categoria:Categoria){
    // return this.http.post<Categoria>(this.URL, categoria);
  }

  public borrar(categoria: Categoria){
    // return this.http.delete<Categoria>(`${this.URL}/${categoria._id}`);
  }

  public obtener(id: string){
    // return this.http.get<Categoria>(`${this.URL}/${id}`);
  }

  public listar() {
    return this.http.get(this.URL);
  }

  public actualizar(categoria: Categoria){
    // return this.http.put<Categoria>(`${this.URL}/${categoria._id}`, categoria);
  }
}
