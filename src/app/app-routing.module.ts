import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';

const routes: Routes = [

  { path:'bitacora', component:BitacoraComponent},
  { path: '', redirectTo: '/bitacora', pathMatch: 'full' },
  { path: '**', redirectTo: '/bitacora', pathMatch: 'full' },
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
