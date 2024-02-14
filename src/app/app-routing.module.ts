import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';

const routes: Routes = [

  { path:'characters', component:CharactersComponent},
  { path:'bitacora', component:BitacoraComponent},

  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
 
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
