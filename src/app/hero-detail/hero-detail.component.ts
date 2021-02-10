import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //tarvitaan url-osoitteesta sankarin id
import { Location } from '@angular/common'; //tarvitaan siirtymään yksi näkymä takaisin/eteen
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; //tarvitaan hakemaan sankarin tiedot

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  // kun komponentti syntyy muistiin, sankarin tietdot tulevat komponenttiin id:n perusteella
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //Tässä on kummallinen plussa, eli tässä muunnetaan merkkijonona tullut id numeroksi tuolla plussalla
    //heroService-palvelua varten.
    //Parempi olisi käyttää Number()
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
