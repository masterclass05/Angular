import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true, // Requerido para Angular 17+ sin módulos
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { // El nombre debe coincidir con el que busca main.ts
  protected readonly title = signal('my-app');

  getHeroes() {
    return [
      new Pokemon(1, 'Spiderman'),
      new Pokemon(13, 'Wonder Woman'),
      new Pokemon(15, 'Lobezno'),
      new Pokemon(20, 'Catwoman')
    ];
  }
}