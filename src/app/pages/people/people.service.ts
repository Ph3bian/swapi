import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient, private api: ApiService) { }


getPeopleList(pgNum:number) {
  return this.http.get(this.api.people(pgNum)).pipe(map((response: any) => response))
}
}
