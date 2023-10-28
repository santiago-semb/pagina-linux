import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Comando } from './Model/Comando';
import { Tag } from './Model/Tag';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://gfdgsdgfsd.onrender.com"

  constructor(private http: HttpClient) { }

  getComandos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/comandos`);
  }

  getComando(nombre:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-comando/${nombre}`)
  }

  setComando(comando:Comando): Observable<any> {
    return this.http.post<Comando>(`${this.apiUrl}/set-comando`, comando)
  }

  getTags(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-tags`)
  }

  getTag(comando:Comando): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-tag/${comando}`)
  }

  setTag(tag:Tag): Observable<any> {
    return this.http.post<Tag>(`${this.apiUrl}/set-tag`, tag)
  }

}
