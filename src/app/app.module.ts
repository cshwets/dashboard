import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {LookupService} from './services/lookup.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HeaderComponent } from './header/header.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

import { ArraySortPipe } from './utils/arraysort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    HeaderComponent,
    VehicleDetailsComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
