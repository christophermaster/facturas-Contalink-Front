import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FiltroComponent } from './shared/filtro/filtro.component'

import { FacturasComponent } from './pages/facturas/facturas.component'
import { NgxPaginationModule } from 'ngx-pagination'
import { DatepickerModule } from 'ng2-datepicker'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    DatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
