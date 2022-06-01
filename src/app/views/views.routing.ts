import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';


const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: adminRoot
  // },
  {
    path:'apptest',
    loadChildren: () => import('./protected/protected.module').then((m) => m.ProtectedModule),
   
  },
  {
    path: adminRoot,
    loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
   
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'error', component: ErrorComponent },
  
  { path: '**', redirectTo: '/error' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
