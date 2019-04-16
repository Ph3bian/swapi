import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  viewPlanetUrl: string;
  
  constructor(private http: HttpClient, private api: ApiService) { }
  getPlanetList(pgNum: number) {
    return this.http.get(this.api.planet(pgNum)).pipe(map((response: any) => response))
  }
  getPlanetDetails() {
    if (this.viewPlanetUrl) {
      return this.http.get(this.viewPlanetUrl).pipe(map((response: any) => response));
    } else {
      this.viewPlanetUrl = localStorage.getItem('currentPlanet');
    return this.http.get(this.viewPlanetUrl).pipe(map((response: any) => response));
    }
  };
}
