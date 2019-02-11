import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from '@angular/fire/database'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './dashboard/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ApiDataService } from './api-data.service';
import { AuthGuard } from './auth/auth.guard';
import { DBinterService } from './dbinter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    DashboardComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    ApiDataService,
    AuthGuard,
    DBinterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
