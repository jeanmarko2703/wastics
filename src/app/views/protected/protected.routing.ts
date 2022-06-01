import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ErrorComponent } from '../app/pages/miscellaneous/error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { BillsComponent } from './bills/bills.component';
import { ManagementComponent } from './management/management.component';
import { HelpComponent } from './help/help.component';
import { MainComponent } from './main.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',

        component: HomeScreenComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        // data: { roles: [UserRole.Admin] },
      },
      {
        path: 'orders',
        component: OrdersComponent,
        // data: { roles: [UserRole.Admin] },
      },
      {
        path: 'bills',
        component: BillsComponent,
        // data: { roles: [UserRole.Admin, UserRole.Editor] },
      },
      {
        path: 'management',
        component: ManagementComponent,
        // data: { roles: [UserRole.Editor] },
      },
      {
        path: 'help',
        component: HelpComponent,
        // data: { roles: [UserRole.Editor] },
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
