import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  RxSpeechRecognitionService,
  resultList,
} from '@kamiazya/ngx-speech-recognition';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public UserData: any;
  public lang: string;
  public sortby: string;
  public fromDate: string;
  public toDate: string;
  public query: string;
  public EverLanguages = [{ i: 'ar', c: 'Arabe' }, { i: 'de', c: 'Germain' }, { i: 'en', c: 'English' }, { i: 'es', c: 'Spanish' }, { i: 'fr', c: 'Frensh' }, { i: 'he', c: 'Hebrew' }, { i: 'it', c: 'Italian' }, { i: 'nl', c: 'Dutch' }, { i: 'pt', c: 'Portuguese' }, { i: 'ru', c: 'Russian' }, { i: 'se', c: 'Sami' }, { i: 'zh', c: 'Chinese' }];
  mobileQuery: MediaQueryList;
  public message = '';
  private _mobileQueryListener: () => void;
  public userImg : string
  show = false ;

  constructor(private data: ApiDataService,
    private router: Router,
    private auth: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public service: RxSpeechRecognitionService,
    public zone: NgZone) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
    this.UserData = JSON.parse(localStorage.getItem('currentuser'));
    if (!this.UserData.photoURL) this.userImg = "data:image/jpeg;base64,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"
    else this.userImg=this.UserData.photoURL
  }


  Search() {
    let readyData = '';
    if (this.query) { readyData = this.query; }
    if (this.toDate) { readyData = readyData + '&to=' + this.toDate; }
    if (this.fromDate) { readyData = readyData + '&from=' + this.fromDate; }
    if (this.lang) { readyData = readyData + '&language=' + this.lang; }
    if (this.sortby) { readyData = readyData + '&sortBy=' + this.sortby; }
    this.data.getData(readyData, 1 , 100).subscribe(x => this.data.shareddata.next(x));
    this.zone.run(() => this.router.navigateByUrl('dashboard/search'));
  }


  listen() {
    const pro = () => {return new Promise ((resolve) => { this.service
      .listen()
      .pipe(resultList)
      .subscribe((list: SpeechRecognitionResultList) => {
        this.message = list.item(0).item(0).transcript;
        resolve(this.message);
      }); }); };
    pro().then((x: string) => {this.query = x;
      this.Search();
      });
  }

  logOut() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
