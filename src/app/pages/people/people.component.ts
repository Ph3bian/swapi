import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  pgNum: number = 1;
  people: {
    results: any[];
  };
  dataSource: MatTableDataSource<{}>;
  constructor(private peopleservice: PeopleService, private router: Router) { }

  ngOnInit() {
    this.getPeople(this.pgNum);
  }
  getPeople(pgNum) {
    this.peopleservice.getPeopleList(pgNum).subscribe((response) => {
      console.log(response);
      this.people = response;
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
  viewPeople = (person) => {
    this.peopleservice.viewPersonUrl = person.url;
    this.router.navigate([`people/${person.name}`])
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.people.results =  this.dataSource.filteredData ;
  }
}
