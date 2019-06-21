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
  offsetNumber: number = 0;
  offset: string = "?limit=20&offset=";
  list: Result[];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getCount();
    this.getList(1);
  }

  getCount(): void {
    this.pokemonService.getCount()
    .subscribe(query => {
      this.query = query;
      this.count = query.count;
      this.pages = Array(Math.ceil(this.count / 20));
      // console.log(this.pages);
      // this.offset = '?limit=20&offset=' + this.offsetNumber;
    });
  }

  getPage(): void {
    const page = +this.route.snapshot.paramMap.get('pageNumber');
    this.getList(page);
  }

  getList(p: number): void {
    // const page = +this.route.snapshot.paramMap.get('pageNumber');
    this.pokemonService.getList(this.offset + ((p-1)*20))
    .subscribe(list => {
      this.list = [];
      this.list = list.results;
      console.log("1 " + this.offsetNumber);
      console.log("1 " + this.offset);
      console.log("name - " +  this.list[19].name);
    });
  }

}
