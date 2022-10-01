import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MenuService } from './menu.service';

import { ContainerComponent } from './container/container.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SidenavService } from './sidenav.service';
import { MenuLinkListComponent } from './menu-link-list/menu-link-list.component';
import { LoadingService } from '../shared/loading.service';

@NgModule({
  declarations: [
    ContainerComponent,
    MenuComponent,
    HeaderComponent,
    MenuLinkListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    ContainerComponent,
  ],
  providers: [
    MenuService,
    SidenavService,
    LoadingService
  ]
})
export class LayoutModule { }
