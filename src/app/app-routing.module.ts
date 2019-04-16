import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PersonComponent } from './pages/people/person/person.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/:name', component: PersonComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/:id', component: StarshipsComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
