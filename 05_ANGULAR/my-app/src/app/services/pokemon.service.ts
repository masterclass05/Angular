import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/pokemons';

  // OBTENER TODOS LOS POKEMON
  getPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // BORRAR UN POKEMON
  deletePokemon(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // AÑADIR NUEVO POKEMON
addPokemon(pokemon: { name: string, type: string }): Observable<any> {
  return this.http.post<any>(this.apiUrl, pokemon);
}

// ACTUALIZAR POKEMON
updatePokemon(id: string, pokemon: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, pokemon);
}
}