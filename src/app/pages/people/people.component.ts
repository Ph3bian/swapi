import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  pgNum: number = 1;
  people: any;
  constructor(private peopleservice: PeopleService) { }

  ngOnInit() {
    this.getPeople(this.pgNum);
  }
  getPeople(pgNum) {
    this.peopleservice.getPeopleList(pgNum).subscribe((response) => {
      console.log(response);
      this.people = response;
    })
  }
}
