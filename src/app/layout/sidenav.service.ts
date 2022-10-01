import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
  public sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    console.log('set sidnav', this.sidenav);
  }

  public open() {
    if(!this.sidenav){
      throw('sidenav is undefined');
    }
    return this.sidenav?.open();
  }

  public close() {
    if(!this.sidenav){
      throw('sidenav is undefined');
    }
    return this.sidenav?.close();
  }

  public toggle(): void {
    this.sidenav?.toggle();
  }
}