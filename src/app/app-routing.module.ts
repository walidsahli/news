import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './dashboard/article/article.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  {path : "auth" , component : AuthComponent, children :[
    {path : "" , component : LoginComponent,pathMatch: 'full'},
    {path : "login" , component : LoginComponent},
    {path : "register" , component : RegisterComponent}
  ]},
  { path : "dashboard" , component : DashboardComponent, canActivate:[AuthGuard] ,children:[ 
    { path : "", component : ArticleComponent, pathMatch: 'full'},
    { path : "article" , component : ArticleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
