import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';

const AppRoutes = [
  {path: 'app-travel-details', component: TravelDetailsComponent},
  {path: 'app-travel-request', component: TravelRequestComponent},
  {path: 'TravelManagement', component : TravelDetailsComponent},
  {path: '', component: TravelDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TravelDetailsComponent,
    TravelRequestComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
