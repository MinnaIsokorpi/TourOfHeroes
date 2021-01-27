/**
 * Rajapintaluokka, Hero, määrittää millainen olio sankari on:
 * Hero-tyyppisellä oliolla on pakko olla id (numero) ja nimi (merkkijono).
 * Tämän on sovelluksen tietomallin eli "model" osa. Varsinainen data muodostaa
 * loput modelista.
 */

export interface Hero {
  id: number;
  name: string;
}
