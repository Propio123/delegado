import { Routes } from '@angular/router';
import { PoliticaComponent } from './pages/politica/politica';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'politica',
    component: PoliticaComponent,
  },
];

