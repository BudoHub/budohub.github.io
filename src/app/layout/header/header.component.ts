import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'bh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavService: SidenavService) 
  { }
  toggleActive:boolean = false;
  ngOnInit(): void {
  }
  toggleSideNav(): void {
    this.toggleActive = !this.toggleActive;
    this.sideNavService.toggle();
    console.log(this.sideNavService.sidenav);
  }
}
