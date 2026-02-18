import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FighterService { 
  private http = inject(HttpClient);
  
  // 1. CAMBIO IMPORTANTE: Volvemos al puerto 3000 (el estándar de json-server)
  // Asegúrate de que tu db.json tenga la clave "fighters"
  private apiUrl = 'http://localhost:3000/fighters';

  // OBTENER TODOS LOS LUCHADORES
  getFighters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // BORRAR UN LUCHADOR
  // Cambiamos el tipo a string | number para evitar errores de coincidencia de ID
  deleteFighter(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // AÑADIR NUEVO LUCHADOR
  addFighter(fighter: { name: string, category: string, technique: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, fighter);
  }

  // ACTUALIZAR LUCHADOR
  updateFighter(id: string | number, fighter: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, fighter);
  }
}