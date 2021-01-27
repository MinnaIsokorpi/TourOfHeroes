import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //hero on nyt olio, jolla on tietotyyppi 'Hero', tämä on typescriptiä
  hero: Hero = {
    id: 1,
    name: 'Ällistysmies',
  };
  constructor() {}

  ngOnInit(): void {}
}
