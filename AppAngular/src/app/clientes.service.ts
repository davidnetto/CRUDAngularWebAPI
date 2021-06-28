import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Cliente } from 'src/Cliente';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'aplication/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
url =`https://localhost:44359/api/clientes`;

  constructor(private http:HttpClient) { }

  ObterTodos(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  ObterPorId(Id :number): Observable<Cliente>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.get<Cliente>(apiUrl);
  }

  Salvar(cliente :Cliente) : Observable<any>{
    return this.http.post<Cliente>(this.url, cliente, httpOptions);
  }

  Atualizar(cliente :Cliente): Observable<any>{
    return this.http.put<Cliente>(this.url, cliente, httpOptions);
  }

  Deletar(Id: number): Observable<any>{
    const apiUrl = `${this.url}/${Id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }

}
