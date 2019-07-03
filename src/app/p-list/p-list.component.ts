import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../pokemon.service';
import { Result, pokemonQuery } from '../pokemonListModel';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.css']
})
export class PListComponent implements OnInit {

  query: pokemonQuery;
  count: number;
  pages: number[];
  offset: string = "?limit=20&offset=";
  list: Result[];
  page = +this.route.snapshot.paramMap.get('pageNumber');

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getCount();
    this.getList(this.page);
  }

  getCount(): void {
    this.pokemonService.getCount()
    .subscribe(query => {
      this.query = query;
      this.count = query.count;
      this.pages = Array(Math.ceil(this.count / 20));
    });
  }

  getList(p: number): void {
    this.pokemonService.getList(this.offset + ((p-1)*20))
    .subscribe(list => {
      this.list = list.results;
      console.log("name - " +  this.list[0].name);
    });
  }

}
