import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';
import { DBinterService } from '../dbinter.service';
import { AuthService } from '../auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public UserData: any
  public lang : string
  public sortby : string
  public fromDate : string
  public toDate : string
  public query : string
  public EverLanguages= [{i:'ar',c:'Arabe'},{i:'de',c:'Germain'},{i:'en',c:'English'},{i:'es',c:'Spanish'},{i:'fr',c:'Frensh'},{i:'he',c:'Hebrew'},{i:'it',c:'Italian'},{i:'nl',c:'Dutch'},{i:'pt',c:'Portuguese'},{i:'ru',c:'Russian'},{i:'se',c:'Sami'},{i:'zh',c:'Chinese'}]
  mobileQuery: MediaQueryList;

  constructor(private data: ApiDataService,
    private router: Router,
    private db: DBinterService,
    private auth : AuthService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
     }
    
    

  ngOnInit() {
    this.UserData = JSON.parse(localStorage.getItem('currentuser'))
  }
  Search(){
    var readyData ="" ; 
    if(this.query) { readyData=this.query}
    if(this.toDate) {readyData=readyData+"&to="+this.toDate}
    if(this.fromDate) {readyData=readyData+"&from="+this.fromDate}
    if(this.lang) {readyData=readyData+"&language="+this.lang}
    if(this.sortby) {readyData=readyData+"&sortBy="+this.sortby}
    this.data.getData(readyData,1).subscribe(x=>this.data.shareddata.next(x))
  }

  THL(x: string, y: number) {
    this.data.GetTH(x, y).subscribe(x => this.data.shareddata.next(x))
  }
  LocalNews() {
    this.data.GetLocalNews()
  }
  MyNews() {
    this.db.GetMyNews()
  }
  logOut(){
    this.auth.logout()
  }

  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}