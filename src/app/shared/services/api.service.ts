import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  baseUrl = 'https://swapi.co/api/';
  people = (pgNum: number) => `${this.baseUrl}people/?page=${pgNum}`;
  planet = (pgNum: number) => `${this.baseUrl}planets/?page=${pgNum}`;
  starships = (pgNum: number) => `${this.baseUrl}starships/?page=${pgNum}`;
}
