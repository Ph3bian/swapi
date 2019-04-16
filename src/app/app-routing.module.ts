import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PersonComponent } from './pages/people/person/person.component';
import { PlanetComponent } from './pages/planets/planet/planet.component';
import { StarshipComponent } from './pages/starships/starship/starship.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/profile', component: PersonComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/planet', component: PlanetComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/starship', component: StarshipComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
