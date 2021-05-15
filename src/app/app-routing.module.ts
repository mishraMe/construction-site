import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialsComponent} from './materials/materials.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {MaterialConfigWindowComponent} from './material-config-window/material-config-window.component';

const routes: Routes = [
  {path : 'welcome', component: WelcomePageComponent},
  {path : 'materials', component: MaterialsComponent,
    children: [

      {
        path: '',
        component: MaterialConfigWindowComponent
      }
    ]},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
