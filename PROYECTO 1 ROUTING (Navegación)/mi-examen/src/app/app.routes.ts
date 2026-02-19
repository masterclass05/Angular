import { Routes } from '@angular/router';
import { ListaHeroes } from './components/lista-heroes/lista-heroes';
import { DetalleHeroe } from './components/detalle-heroe/detalle-heroe';
import { Login } from './components/login/login'; // Importamos tu nuevo componente

export const routes: Routes = [
  // 1. Ruta de acceso (Login)
  { path: 'login', component: Login },

  // 2. Rutas de la aplicación
  { path: 'heroes', component: ListaHeroes }, 
  { path: 'detalle', component: DetalleHeroe }, 
  
  // 3. Redirección: Ahora lo mandamos al login por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // 4. Comodín: Si escribe cualquier tontería, al login
  { path: '**', redirectTo: '/login' }
];