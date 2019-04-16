import { Component, OnInit } from '@angular/core';
import { StartshipsService } from '../startships.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  starship: any;

  constructor(private starshipService: StartshipsService) { }
  ngOnInit() {
    this.getStarship();
  }
  getStarship= () => {
    this.starshipService.getStarshipDetails().subscribe(response => {
      this.starship = response;
    })
  }
}
