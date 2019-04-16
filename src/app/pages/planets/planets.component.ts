import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  pgNum: number = 1;
  planets: any;
  dataSource: MatTableDataSource<{}>;
  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets(this.pgNum);
  }
  
  getPlanets(pgNum) {
    this.planetsService.getPlanetList(pgNum).subscribe((response) => {
      console.log(response);
      this.planets= response;
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.planets.results =  this.dataSource.filteredData ;
  }
}
