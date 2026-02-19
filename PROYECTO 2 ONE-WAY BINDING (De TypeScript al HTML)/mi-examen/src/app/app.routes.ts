//Úsalo si te piden: "Configura rutas", "haz que se pueda navegar" o "crea un menú".
import { Routes } from '@angular/router';
import { ListaHeroes } from './components/lista-heroes/lista-heroes';
import { DetalleHeroe } from './components/detalle-heroe/detalle-heroe';

export const routes: Routes = [
  // 1. Ruta principal
  { path: 'heroes', component: ListaHeroes }, 
  
  // 2. Segunda ruta
  { path: 'detalle', component: DetalleHeroe }, 
  
  // 3. Redirección: Si el usuario no pone nada, lo mandamos a /heroes (Pág. 5 del PDF)
  { path: '', redirectTo: '/heroes', pathMatch: 'full' } 
];