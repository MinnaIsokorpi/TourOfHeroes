import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

//dekoraattori eli annotaatio kertoo että service voidaan injektoida
//eli liittää komponttiin dependency-injektiolla
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //messageservice -olio syntyy tässä ja sitä samaa käytetään myös messages-komponentissa
  constructor(private messageService: MessageService) {}

  //palautetaan observable-sankarioliotaulukko
  //tässä tehdään observable itse of-operaattorilla
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //yksittäisen sankarin hakeminen id:n perusteella
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add('HeroService: fetched hero id=' + id);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
