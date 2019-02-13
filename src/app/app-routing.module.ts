import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { C404Component } from './c404/c404.component';

const routes: Routes = [
  {path : "" , component : HomeComponent, pathMatch :"full"},
  {path : "auth" , component : AuthComponent, children :[
    {path : "" , component : LoginComponent,pathMatch: 'full'},
    {path : "login" , component : LoginComponent},
    {path : "register" , component : RegisterComponent}
  ]},
  { path : "dashboard" , component : DashboardComponent, canActivate:[AuthGuard]},
  { path : "**" , component:C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
