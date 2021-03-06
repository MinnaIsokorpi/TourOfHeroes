import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //hero on nyt olio, jolla on tietotyyppi 'Hero', tämä on typescriptiä
  //hero: Hero = {
  //  id: 1,
  //  name: 'Ällistysmies',
  //};

  //heroes = HEROES; //kaikki sankarit taulukosta
  heroes: Hero[]; //kaikki sankarit palvelulta

  //otetaan palvelu käyttöön. heroService on olio joka syntyy tuosta HeroService-luokasta
  //konstruktori-injektiolla. Tämä on "dependency injection" eli riippuvuuden injektio.
  //Ideana on liittää service ja komponentti löysästi, jotta service on helppo myös vaihtaa
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  //kutsutaan alussa "sankareiden haku"-metodia
  //tämä on metodi joka suoritetaan automaattisesti aina kun komponetti syntyy
  //tämä voisi olla myös konstruktorissa, mutta ilmeisesti tämä parempi tyyli
  ngOnInit(): void {
    this.getHeroes();
  }

  //getHeroes hakee sankarit palvelulta tähän komponenttiin
  // HUOM toinen getHeroes on siis palvelun metodi
  //servicen getHeroes tilaa, "subscribe", observablen josta saadaan tieto ulos
  //callbackillä, tieto tulee "reaktiivisesti"
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim(); //ottaa pois tyhjät välilyönnit
    if (!name) {
      return;
    }
    //tyyppimuunnos Hero-tyyppiseksi "as Hero"
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero); //lista päivittyy heti, ei odottele kantaa
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
