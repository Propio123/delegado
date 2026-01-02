import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PoliticaComponent } from './pages/politica/politica';

export const routes: Routes = [
  { path: '', component: HomeComponent
    
   },
   {
    path: 'politica',
    loadComponent: () =>
      import('./pages/politica/politica')
        .then(m => m.PoliticaComponent)
  }

];

