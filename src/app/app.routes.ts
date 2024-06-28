import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: '404',
    loadComponent: () => import('../shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
