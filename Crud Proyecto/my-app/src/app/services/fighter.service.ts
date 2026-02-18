import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FighterService { // <--- AQUÍ ESTABA EL ERROR: Tenía que llamarse FighterService
  private http = inject(HttpClient);
  
  // Cambiamos la URL para que apunte a tus luchadores
  private apiUrl = 'http://localhost:3000/fighters';

  // OBTENER TODOS LOS LUCHADORES
  getFighters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // BORRAR UN LUCHADOR
  deleteFighter(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // AÑADIR NUEVO LUCHADOR (con los campos de tu proyecto MMA)
  addFighter(fighter: { name: string, category: string, technique: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, fighter);
  }

  // ACTUALIZAR LUCHADOR
  updateFighter(id: string, fighter: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, fighter);
  }
}