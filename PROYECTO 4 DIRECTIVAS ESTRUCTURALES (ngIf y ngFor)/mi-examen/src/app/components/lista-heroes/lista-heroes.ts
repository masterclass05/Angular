import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-heroes',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-heroes.html', 
  styleUrl: './lista-heroes.css'
})
export class ListaHeroes {
  // --- Estas son las variables que tu HTML está pidiendo a gritos ---
  titulo: string = "Mi Lista de Héroes";
  imgUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  estaDesactivado: boolean = false;
  claseRoja: string = "texto-rojo"; // Asegúrate de tener .texto-rojo { color: red; } en tu CSS
  colorVerde: string = "green";

  // --- El array de datos ---
  heroes = [
    { id: 1, nombre: 'Spiderman', power: 80 },
    { id: 2, nombre: 'Wonder Woman', power: 95 },
    { id: 3, nombre: 'Lobezno', power: 0 } // Este saldrá con el mensaje [SIN ENERGÍA]
  ];

  // --- Las funciones que el HTML intenta llamar ---
  avisar(tipo: string) {
    alert("Has pulsado el botón de tipo: " + tipo);
  }

  getHeroes() {
    return this.heroes;
  }
}