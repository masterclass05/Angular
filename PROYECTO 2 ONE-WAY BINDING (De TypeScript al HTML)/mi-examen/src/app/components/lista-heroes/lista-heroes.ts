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
  tituloExamen: string = "Repaso de Data Binding";
  nombreProtagonista: string = "Spiderman";
  fotoAngular: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  botonBloqueado: boolean = true; 

  // Añadimos una función para probar el botón más tarde si quieres
  activarBoton() {
    this.botonBloqueado = false;
  }
}