import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compenants/home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { EditClientComponent } from './compenants/edit-client/edit-client.component';
import { LocationComponent } from './compenants/location/location.component';
import { EditLocationComponent } from './compenants/edit-location/edit-location.component';
import { EditVoitureComponent } from './compenants/edit-voiture/edit-voiture.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'edit-voiture/:id',
    component: EditVoitureComponent,
  },
  {
    path: 'edit-client/:id',
    component: EditClientComponent,
  },
  {
    path: 'edit-location/:id',
    component: EditLocationComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'locations',
    component: LocationComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
