import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
