import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
 
}
export const ROUTES: RouteInfo[] = [
  { path: '/people', title: 'People' },
  { path: '/planets', title: 'Planets'},
  { path: '/starships', title: 'starships'},
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
