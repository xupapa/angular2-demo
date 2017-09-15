import { Component, OnChanges } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from "./mock-heroes";
import { OnInit } from "@angular/core";
import { HeroService } from "./hero.service";
@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes!';
  // hero: Hero = {
  //   id: 1,
  //   name: "Wind"
  // };
  heroes = HEROES;
  constructor(private heroService: HeroService) { }//注入HeroService
  selectedHero: Hero;
  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    // this.getHeroes();
  }

}
// export class Hero {
//   id: number;
//   name: String;
// }
