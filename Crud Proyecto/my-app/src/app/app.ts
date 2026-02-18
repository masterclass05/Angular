import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos lo necesario para que funcione el HTML que acabamos de poner
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Ya no necesitamos lógica aquí, este componente es solo el "marco" de la web.
}