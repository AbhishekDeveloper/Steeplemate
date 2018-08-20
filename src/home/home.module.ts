import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DataViewModule,
    DropdownModule,
    PanelModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [ 
    HomeComponent 
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {}