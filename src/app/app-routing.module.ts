import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { C404Component } from './c404/c404.component';
import { SearchComponent } from './dashboard/search/search.component';
import { TechnologyComponent } from './dashboard/technology/technology.component';
import { SportComponent } from './dashboard/sport/sport.component';
import { BusinessComponent } from './dashboard/business/business.component';
import { HealthComponent } from './dashboard/health/health.component';
import { ScienceComponent } from './dashboard/science/science.component';
import { ArticleComponent } from './dashboard/article/article.component';
import { MynewsComponent } from './dashboard/mynews/mynews.component';
import { Auth2Guard } from './auth/auth2.guard';

const routes: Routes = [
  {path : '' , component : LoginComponent, canActivate: [Auth2Guard], pathMatch : 'full'},
  {path : 'auth' , component : AuthComponent, canActivate: [Auth2Guard], children : [
    {path : '' , component : LoginComponent, pathMatch: 'full'},
    {path : 'login' , component : LoginComponent},
    {path : 'register' , component : RegisterComponent}
  ]},
  { path : 'dashboard' , component : DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: ArticleComponent, pathMatch: 'full'},
    {path: 'home', component: ArticleComponent},
    {path: 'search' , component : SearchComponent},
    {path : 'tech', component: TechnologyComponent},
    {path : 'sport', component: SportComponent},
    {path : 'buss', component: BusinessComponent},
    {path : 'health', component: HealthComponent},
    {path: 'science', component: ScienceComponent},
    {path : 'mynews', component: MynewsComponent},
  ]},
  { path : '**' , component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
