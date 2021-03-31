import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardontainerComponent} from './dashboardontainer/dashboardontainer.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'dashboard',
    component:DashboardontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
