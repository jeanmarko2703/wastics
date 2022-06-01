import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from './main.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { BillsComponent } from './bills/bills.component';
import { ManagementComponent } from './management/management.component';
import { HelpComponent } from './help/help.component';
import { ProtectedRoutingModule } from './protected.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { DashboardsContainersModule } from 'src/app/containers/dashboards/dashboards.containers.module';
import { DashboardsRoutingModule } from '../app/dashboards/dashboards.routing';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';


@NgModule({
  declarations: [
    MainComponent,
    HomeScreenComponent,
    ProfileComponent,
    OrdersComponent,
    BillsComponent,
    ManagementComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    LayoutContainersModule,
    DashboardsContainersModule,
    DashboardsRoutingModule,
    ComponentsCardsModule
  ]
})
export class ProtectedModule { }
