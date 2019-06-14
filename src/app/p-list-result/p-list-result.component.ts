import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { pokemonInfo, typeList } from '../pokemonModel';

@Component({
  selector: 'app-p-list-result',
  templateUrl: './p-list-result.component.html',
  styleUrls: ['./p-list-result.component.css']
})
export class PListResultComponent implements OnInit {
  @Input() name: string;

  pokemon: pokemonInfo;
  list: typeList[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.getPokemon(this.name)
    .subscribe(pokemon => {
      this.pokemon = pokemon;
      this.list = pokemon.types;
      // console.log(this.pokemon.sprites.front_default);
    })
  }

}
