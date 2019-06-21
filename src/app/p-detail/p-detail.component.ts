import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService } from '../pokemon.service';
import { pokemonInfo, typeList, abilityList, statList } from '../pokemonModel';

@Component({
  selector: 'app-p-detail',
  templateUrl: './p-detail.component.html',
  styleUrls: ['./p-detail.component.css']
})
export class PDetailComponent implements OnInit {

  pokemon: pokemonInfo;
  tList: typeList[];
  aList: abilityList[];
  sList: statList[];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonByID(id)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.tList = pokemon.types;
        this.tList.reverse();
        this.aList = pokemon.abilities;
        this.aList.reverse();
        this.sList = pokemon.stats;
        this.sList.reverse();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
