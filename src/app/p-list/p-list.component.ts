import { Component, OnInit } from '@angular/core';

import { pokemonInfo } from '../pokemonModel';
import { PokemonService } from '../pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Result, pokemonQuery } from '../pokemonListModel';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.css']
})
export class PListComponent implements OnInit {
  list: Result[];
  pokemon: pokemonInfo;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getList();
    this.getPokemon();
  }

  getList(): void {
    this.pokemonService.getList()
    .subscribe(list => this.list = list.results);
  }

  getPokemon(): void {
    this.pokemonService.getPokemon()
    .subscribe(pokemon => this.pokemon = pokemon);
  }

}
