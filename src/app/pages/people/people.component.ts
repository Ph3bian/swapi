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
  people: {
    results: any[];
    next: '',
    previous: '',
    count: '',
  };
  loading: boolean = true;
  dataSource: MatTableDataSource<{}>;
  itemsPerPage: number = 10;
  totalPages: number;
  constructor(private peopleservice: PeopleService, private router: Router) { }
  pgNum: number = 1;
  ngOnInit() {
    this.getPeople( this.pgNum);
  }
  getPeople(pgNum) {
    this.peopleservice.getPeopleList(pgNum).subscribe((response) => {
      this.loading = false
      this.people = response;
      this.totalPages = Math.ceil(parseInt(response.count) / this.itemsPerPage);
      this.dataSource = new MatTableDataSource(response.results);
    })
  }
  loadNext = () => {
    this.loading = true;
    this.pgNum++

    this.getPeople( this.pgNum);
  }
  loadPrevious = () => {
    this.loading = true;
    this.pgNum--

    this.getPeople( this.pgNum);
  }
  viewPeople = (person) => {
    this.peopleservice.viewPersonUrl = person.url;
    localStorage.setItem('currentPerson', person.url);
    this.router.navigate(['people/profile'])
  }
  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.people.results = this.dataSource.filteredData;
  }
}
