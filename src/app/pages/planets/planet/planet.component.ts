import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet: any;
  constructor(private planetService:PlanetsService) { }

  ngOnInit() {
    this.getPlanet();
  }
  getPlanet= () => {
    this.planetService.getPlanetDetails().subscribe(response => {
      this.planet = response;
    })
  }
}
