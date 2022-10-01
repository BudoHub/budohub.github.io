import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { MenuLink } from '../menu-link-list/menu-link';
import { MenuService } from '../menu.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'bh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu_header:string = "BudoHub";

  menuLink$!: Observable<MenuLink[]>;
  @ViewChild('mainSidenav', { static: true }) public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private menuService: MenuService) {
      this.menuLink$ = this.menuService.links$;
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.menuLink$ = this.menuService.filterByOrganization("any");
  }

  toggleSideNav(): void {
    this.sidenavService.toggle();
  }
}
