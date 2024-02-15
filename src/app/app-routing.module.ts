import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FacturasComponent } from './pages/facturas/facturas.component';

const routes: Routes = [

  { path:'facturas', component:FacturasComponent},
  { path: '', redirectTo: '/facturas', pathMatch: 'full' },
  { path: '**', redirectTo: '/facturas', pathMatch: 'full' },
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
