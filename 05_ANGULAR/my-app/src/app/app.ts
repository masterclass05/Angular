import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

  // Eliminamos "new Pokemon" porque ya no existe esa clase
  // Usamos objetos simples de JavaScript { id, name }
  getPokemon() {
    return [
      { id: 1, name: 'Pikachu' },
      { id: 13, name: 'Charizard' },
      { id: 15, name: 'Pidgey' },
      { id: 20, name: 'Bulbasaur' }
    ];
  }
}