// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
