import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPage } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserPage,
  },
];
