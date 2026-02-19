import { Component } from '@angular/core';
// SOLUCIÓN AL WARNING NG8103: Importamos CommonModule para que funcione el *ngFor
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-lista-heroes',
  standalone: true,
  // AÑADIMOS CommonModule AQUÍ TAMBIÉN
  imports: [CommonModule], 
  templateUrl: './lista-heroes.html',
  styleUrl: './lista-heroes.css'
})
export class ListaHeroes {
  // SOLUCIÓN AL ERROR TS2339 (titulo):
  titulo: string = "Mi Lista de Héroes";

  // SOLUCIÓN AL ERROR TS2339 (imgUrl):
  imgUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  // Datos para el *ngFor
  heroes = [
    { id: 1, nombre: 'Spiderman', power: 80 },
    { id: 2, nombre: 'Iron Man', power: 90 },
    { id: 3, nombre: 'Hulk', power: 0 }
  ];

  // SOLUCIÓN AL ERROR TS2339 (avisar):
  avisar(mensaje: string) {
    alert("Has hecho: " + mensaje);
  }

  // Función que necesita tu *ngFor
  getHeroes() {
    return this.heroes;
  }
}