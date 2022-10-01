import { Component, Input, OnInit } from '@angular/core';
import { MenuLink } from './menu-link';

@Component({
  selector: 'bh-menu-link-list',
  templateUrl: './menu-link-list.component.html',
  styleUrls: ['./menu-link-list.component.scss']
})
export class MenuLinkListComponent{

  constructor() { }

  @Input() links: MenuLink[] | null = [];
}
