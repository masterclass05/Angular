import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FighterService { 
  private http = inject(HttpClient);
  

  private apiUrl = 'http://localhost:3000/fighters';

  // OBTENER TODOS LOS LUCHADORES
  getFighters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // BORRAR UN LUCHADOR
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