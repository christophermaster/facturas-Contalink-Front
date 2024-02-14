import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BitacoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
