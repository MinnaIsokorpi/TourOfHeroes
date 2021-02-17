import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Ällistysmies' },
      { id: 11, name: 'Tohtori Noppa' },
      { id: 12, name: 'Narkki' },
      { id: 13, name: 'Mahti' },
      { id: 14, name: 'Vauhti' },
      { id: 15, name: 'Magneetti' },
      { id: 16, name: 'Kumimies' },
      { id: 17, name: 'Dynamo' },
      { id: 18, name: 'Tohtori Älli' },
      { id: 19, name: 'MagmaNainen' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
