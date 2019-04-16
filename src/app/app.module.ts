import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTable } from '@angular/material';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { ApiService } from './shared/services/api.service';
import { PeopleService } from './pages/people/people.service';
import { PlanetsService } from './pages/planets/planets.service';
import { StartshipsService } from './pages/starships/startships.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PersonComponent } from './pages/people/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [ApiService, PeopleService, PlanetsService, StartshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
