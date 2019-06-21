import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { pokemonInfo } from './pokemonModel';
import { pokemonQuery } from './pokemonListModel';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient) { }

  getCount(): Observable<pokemonQuery> {
    return this.http.get<pokemonQuery>(this.pokeUrl);
  }

  getList(offset: string): Observable<pokemonQuery> {
    const url = `${this.pokeUrl}${offset}`;
    return this.http.get<pokemonQuery>(url);
  }

  getPokemonByName(name: string): Observable<pokemonInfo> {
    const url = `${this.pokeUrl}/${name}`;
    return this.http.get<pokemonInfo>(url);
  }

  getPokemonByID(id: number): Observable<pokemonInfo> {
    const url = `${this.pokeUrl}/${id}`;
    return this.http.get<pokemonInfo>(url);
  }
  
}
