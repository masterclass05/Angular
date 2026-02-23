import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FighterService } from '../../services/fighter.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fighter.html',
  styleUrl: './fighter.css',
})
export class FighterComponent implements OnInit {
  fighterService = inject(FighterService);
  route = inject(ActivatedRoute); 
  router = inject(Router);        

  listaFighters: any[] = [];
  nuevoFighter: any; 
  editando = false;
  vistaActual: 'lista' | 'formulario' = 'lista';

  constructor() {
    this.resetFighter();
    this.cargarFighters();
  }

  ngOnInit() {
    // Escuchamos cambios en la URL para cambiar la vista dinámicamente
    this.route.queryParams.subscribe(params => {
      if (params['vista'] === 'crear') {
        this.vistaActual = 'formulario';
        if (!this.editando) this.resetFighter();
      } else {
        this.vistaActual = 'lista';
        this.editando = false;
      }
    });
  }

  cargarFighters() {
    this.fighterService.getFighters().subscribe(datos => this.listaFighters = datos);
  }

  seleccionarFighter(f: any) {
    this.nuevoFighter = { ...f };
    this.editando = true;
    // Al editar, forzamos la vista de formulario sin necesidad de navegar
    this.vistaActual = 'formulario'; 
  }

  guardar() {
    if (this.editando) {
      this.fighterService.updateFighter(this.nuevoFighter.id, this.nuevoFighter).subscribe(() => {
        this.cargarFighters();
        this.volverALista();
      });
    } else {
      const dataToSend = { ...this.nuevoFighter };
      delete dataToSend.id; 
      dataToSend.fecha_creacion = Math.floor(Date.now() / 1000);

      this.fighterService.addFighter(dataToSend).subscribe(() => {
        this.cargarFighters();
        this.volverALista();
      });
    }
  }

  resetFighter() {
    this.nuevoFighter = { nombre: '', apellidos: '', edad: null, peso: null, altura: null, nivel: 'Principiante', fecha_creacion: null };
  }

  // MÉTODO CRÍTICO CORREGIDO:
  volverALista() {
    this.resetFighter();
    this.editando = false;
    this.vistaActual = 'lista'; // Forzamos el cambio visual inmediato
    
    // Navegamos para limpiar la URL
    this.router.navigate(['/fighter'], { 
      queryParams: { vista: 'lista' }
    });
  }

  cancelarEdicion() {
    this.volverALista();
  }

  borrar(id: string) {
    this.fighterService.deleteFighter(id).subscribe(() => this.cargarFighters());
  }
}