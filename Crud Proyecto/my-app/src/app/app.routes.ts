import { Routes } from '@angular/router';
import { FighterComponent } from './components/pokemon/fighter'; 

export const routes: Routes = [
  // Redirigir la raíz al listado de luchadores por defecto
  { path: '', redirectTo: '/luchadores', pathMatch: 'full' },
  
  // Ruta principal del CRUD de MMA
  { 
    path: 'luchadores', 
    component: FighterComponent, 
    title: 'MMA Fighters - Gestión' 
  }
];