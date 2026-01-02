import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politica.html'
})
export class PoliticaComponent {
  lastUpdate = 'Marzo 2025';
}

