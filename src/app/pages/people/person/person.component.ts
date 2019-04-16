import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: any;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPerson();
  }
  getPerson = () => {
    this.peopleService.getPersonDetails().subscribe(response => {
      this.person = response;
    })
  }
}
