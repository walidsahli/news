import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatNativeDateModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RxSpeechRecognitionService, SpeechRecognitionModule } from '@kamiazya/ngx-speech-recognition';



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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { C404Component } from './c404/c404.component';
import { SportComponent } from './dashboard/sport/sport.component';
import { HealthComponent } from './dashboard/health/health.component';
import { BusinessComponent } from './dashboard/business/business.component';
import { TechnologyComponent } from './dashboard/technology/technology.component';
import { ScienceComponent } from './dashboard/science/science.component';
import { SearchComponent, DialogOverviewExampleDialog } from './dashboard/search/search.component';
import { MynewsComponent } from './dashboard/mynews/mynews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    DashboardComponent,
    ArticleComponent,
    HomeComponent,
    C404Component,
    SportComponent,
    HealthComponent,
    BusinessComponent,
    TechnologyComponent,
    ScienceComponent,
    SearchComponent,
    MynewsComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    SpeechRecognitionModule
  ],
  providers: [
    AuthService,
    ApiDataService,
    AuthGuard,
    DBinterService,
    RxSpeechRecognitionService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]

})
export class AppModule { }
