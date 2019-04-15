import { Component, OnInit } from '@angular/core';
import { StartshipsService } from './startships.service';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  pgNum: number = 1;
  starships: any;
  constructor(private starshipService: StartshipsService) { }

  ngOnInit() {
    this.getStarships(this.pgNum);
  }
  
  getStarships(pgNum) {
    this.starshipService.getStarshipList(pgNum).subscribe((response) => {
      console.log(response);
      this.starships= response;
    })
  }
}
