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
    if (!this.UserData.photoURL) this.userImg = "https://banner2.kisspng.com/20180629/ru/kisspng-computer-icons-user-background-icon-5b35b73f4812b6.2941272015302469752952.jpg"
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
      this.Search(); });
  }

  logOut() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
