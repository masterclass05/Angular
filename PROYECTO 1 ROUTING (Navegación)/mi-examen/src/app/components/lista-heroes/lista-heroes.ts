import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-heroes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-heroes.html', // Asegúrate de que apunte a LISTA, no a detalle
  styleUrl: './lista-heroes.css'
})
export class ListaHeroes { // El nombre debe ser exacto para que app.routes lo encuentre
  titulo: string = "Panel de Escuadrón";
  imgUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  
  heroes = [
    { id: 1, nombre: 'Spiderman', power: 80 },
    { id: 2, nombre: 'Iron Man', power: 95 },
    { id: 3, nombre: 'Hulk', power: 100 },
    { id: 4, nombre: 'Batman', power: 0 }
  ];

  avisar(msj: string) {
    alert(msj);
  }

  getHeroes() {
    return this.heroes;
  }
}