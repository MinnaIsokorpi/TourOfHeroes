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
}
