import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compenants/home/home.component';
import { NavbarComponent } from './compenants/navbar/navbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { EditVoitureComponent } from './compenants/edit-voiture/edit-voiture.component';
import { EditClientComponent } from './compenants/edit-client/edit-client.component';
import { LocationComponent } from './compenants/location/location.component';
import { EditLocationComponent } from './compenants/edit-location/edit-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ClientsComponent,
    EditVoitureComponent,
    EditClientComponent,
    LocationComponent,
    EditLocationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
