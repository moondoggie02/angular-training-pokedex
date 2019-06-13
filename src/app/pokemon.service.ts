import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { pokemonInfo } from './pokemonModel';
import { pokemonQuery } from './pokemonListModel';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient) { }

  getList (): Observable<pokemonQuery> {
    return this.http.get<pokemonQuery>(this.url);
  }

  getPokemon (): Observable<pokemonInfo> {
    return this.http.get<pokemonInfo>(this.url + '/1');
  }
}
