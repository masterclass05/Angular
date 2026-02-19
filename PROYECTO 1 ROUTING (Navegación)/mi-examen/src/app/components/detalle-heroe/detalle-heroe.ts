import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-heroe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-heroe.html',
  styleUrl: './detalle-heroe.css'
})
export class DetalleHeroe { }