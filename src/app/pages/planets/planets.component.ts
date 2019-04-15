import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  pgNum: number = 1;
  planets: any;
  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets(this.pgNum);
  }
  
  getPlanets(pgNum) {
    this.planetsService.getPlanetList(pgNum).subscribe((response) => {
      console.log(response);
      this.planets= response;
    })
  }
}
