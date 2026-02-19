import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FighterService } from '../../services/fighter.service';

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fighter.html',
  styleUrl: './fighter.css',
})
export class FighterComponent {
  fighterService = inject(FighterService);
  listaFighters: any[] = [];
  
  nuevoFighter = { id: '', name: '', category: '', technique: '' }; 
  editando = false;

  constructor() {
    this.cargarFighters();
  }

  cargarFighters() {
    this.fighterService.getFighters().subscribe(datos => this.listaFighters = datos);
  }

  seleccionarFighter(f: any) {
    this.nuevoFighter = { ...f };
    this.editando = true;
  }

  guardar() {
    if (this.editando) {
      this.fighterService.updateFighter(this.nuevoFighter.id, this.nuevoFighter).subscribe(() => {
        this.cargarFighters();
        this.cancelarEdicion();
      });
    } else {
      const { id, ...sinId } = this.nuevoFighter; 
      this.fighterService.addFighter(sinId).subscribe(() => {
        this.cargarFighters();
        this.cancelarEdicion();
      });
    }
  }

  cancelarEdicion() {
    this.nuevoFighter = { id: '', name: '', category: '', technique: '' };
    this.editando = false;
  }

  borrar(id: string) {
    this.fighterService.deleteFighter(id).subscribe(() => this.cargarFighters());
  }
}
/* usuario_id: Number,
    nombre: String,
    apellidos: String,        
    edad: Number,
    peso: Number,
    altura: Number,
    nivel: {
        type: String,
        enum: ['Principiante', 'Intermedio', 'Avanzado']
    },
    fecha_creacion: {
        type: Number,                   
        default: () => Math.floor(Date.now() / 1000)  
    }*/ 