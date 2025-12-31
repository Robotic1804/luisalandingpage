import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GoComponent } from './pages/go/go.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'go', component: GoComponent },
  { path: '**', redirectTo: '' },
];


