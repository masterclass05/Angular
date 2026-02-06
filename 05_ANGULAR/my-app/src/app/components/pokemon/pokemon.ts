import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- 1. Importar esto
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- 2. Añadirlo aquí
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  pokemonService = inject(PokemonService);
  listaPokemons: any[] = [];
  nuevoPokemon = { id: '', name: '', type: '' }; // Añadimos id aquí
  editando = false; // Variable para controlar el estado

  constructor() {
    this.cargarPokemons();
  }

  cargarPokemons() {
    this.pokemonService.getPokemons().subscribe(datos => this.listaPokemons = datos);
  }

  // Prepara el formulario para editar
  seleccionarPokemon(poke: any) {
    this.nuevoPokemon = { ...poke }; // Copiamos los datos al formulario
    this.editando = true;
  }

guardar() {
  if (this.editando) {
    // Editar existente
    this.pokemonService.updatePokemon(this.nuevoPokemon.id, this.nuevoPokemon).subscribe(() => {
      this.cargarPokemons(); // Recarga la lista desde el servidor (con las IDs correctas)
      this.cancelarEdicion();
    });
  } else {
    // Crear nuevo - IMPORTANTE: No enviamos ID, dejamos que el servidor la cree
    const { id, ...pokemonSinId } = this.nuevoPokemon; 
    
    this.pokemonService.addPokemon(pokemonSinId).subscribe(() => {
      this.cargarPokemons(); // Esta línea es CLAVE: trae el nuevo pokemon con su ID real del server
      this.cancelarEdicion();
    });
  }
}

  cancelarEdicion() {
    this.nuevoPokemon = { id: '', name: '', type: '' };
    this.editando = false;
  }

  borrar(id: string) {
    this.pokemonService.deletePokemon(id).subscribe(() => this.cargarPokemons());
  }
}