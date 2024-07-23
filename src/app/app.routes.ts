import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('../home/home.component').then(c => c.HomeComponent),
    title: 'Adam Khairi - Web Developer',
  },
  {
    path: '**',
    loadComponent: () => import('../shared/components/not-found/not-found.component').then(c => c.NotFoundComponent),
    title: '404 - Page Not Found',
  },
];
