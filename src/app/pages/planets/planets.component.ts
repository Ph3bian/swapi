import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  pgNum: number = 1;
  planets: any;
  dataSource: MatTableDataSource<{}>;
  constructor(private planetsService: PlanetsService,private router:Router) { }

  ngOnInit() {
    this.getPlanets(this.pgNum);
  }
  
  getPlanets(pgNum) {
    this.planetsService.getPlanetList(pgNum).subscribe((response) => {
      this.planets= response;
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
  viewPlanet = (planet) => {
    this.planetsService.viewPlanetUrl = planet.url;
    localStorage.setItem('currentPlanet', planet.url);
    this.router.navigate(['planets/planet'])
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.planets.results =  this.dataSource.filteredData ;
  }
}
