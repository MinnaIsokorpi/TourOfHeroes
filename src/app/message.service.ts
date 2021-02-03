import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //Taulukko johon tulee viestejä sovelluksen tapahtumista, "lokitaulukko"
  messages: string[] = [];

  //Merkinnän lisäys
  add(message: string) {
    this.messages.push(message);
  }

  //Lokit tyhjennys
  clear() {
    this.messages = [];
  }
}
