import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _url = 'https://pokeapi.co/api/v2/';
  //https://pokeapi.co/api/v2/pokemon/1
  constructor(private http: HttpClient) { }

  Service_Get(Modelo: string, Dato: string | number) {
    return this.http.get(`${this._url}/${Modelo}/${Dato}`)
  }
}
