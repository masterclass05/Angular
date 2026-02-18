import { Routes } from '@angular/router';
import { FighterComponent } from './components/fighter/fighter'; 

export const routes: Routes = [
  // Redirigir la raíz al listado de luchadores por defecto
  { path: '', redirectTo: '/fighter', pathMatch: 'full' },
  
  // Ruta principal del CRUD de MMA
  { 
    path: 'fighter', 
    component: FighterComponent, 
    title: 'MMA Fighters - Gestión' 
  }
];