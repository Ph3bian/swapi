import { Component, OnInit } from '@angular/core';
import { StartshipsService } from './startships.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  pgNum: number = 1;
  starships: any;
  dataSource: MatTableDataSource<{}>;
  totalPages: number;
  itemsPerPage: number= 10;

  constructor(private starshipService: StartshipsService, private router: Router) { }
  ngOnInit() {
    this.getStarships(this.pgNum);
  }

  getStarships(pgNum) {
    this.starshipService.getStarshipList(pgNum).subscribe((response) => {
      this.starships = response;
      this.totalPages= Math.floor(parseInt(response.count)/this.itemsPerPage);
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.starships.results = this.dataSource.filteredData;
  }
  viewStarship = (starship) => {
    this.starshipService.viewStarshipUrl = starship.url;
    localStorage.setItem('currentStarship', starship.url);
    this.router.navigate(['starships/starship'])
  }
}
