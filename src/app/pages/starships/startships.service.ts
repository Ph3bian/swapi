import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class StartshipsService {
  viewStarshipUrl: string;
  constructor(private http: HttpClient, private api: ApiService) { }
  getStarshipList(pgNum: number) {
    return this.http.get(this.api.starships(pgNum)).pipe(map((response: any) => response))
  }
  getStarshipDetails() {
    if (this.viewStarshipUrl) {
      return this.http.get(this.viewStarshipUrl).pipe(map((response: any) => response));
    } else {
      this.viewStarshipUrl = localStorage.getItem('currentStarship');
    return this.http.get(this.viewStarshipUrl).pipe(map((response: any) => response));
    }
  };
}
