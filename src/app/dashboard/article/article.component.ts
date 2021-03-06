import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DBinterService } from 'src/app/dbinter.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public article: any;
  public length: number;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageindex = 1;
  pageEvent: PageEvent;
  constructor(private http: HttpClient, private dbinter: DBinterService) {

  }
  GetLocalNews(p: number, m: number) {

    const q1 = () => {
      return new Promise((resolve) =>
        this.http.get<any>('https://api.ipify.org?format=json')
          .subscribe(x => {
            resolve(x.ip);
          }));
    };
    q1().then(y => {
      const q2 = () => {
        return new Promise((resolve) =>
          this.http.get<any>('http://api.ipstack.com/' + y + '?access_key=3eacd5dfacd3c8d2104b002b7d2f0f15')
            .subscribe(z => resolve(z.country_name)));
      };
      q2().then(h => {
        const q3 = () => {
          return new Promise((resolve) => {
            this.http.get<any>('https://restcountries.eu/rest/v2/name/' + h).subscribe(m => resolve(m));
          });
        };
        q3().then(l => {
          this.http.get<any>('https://newsapi.org/v2/everything?q='
            + l[0].nativeName +'&page=' + p + '&pageSize=' + m + '&sortBy=publishedAt&apiKey=b9d34afdf37948cda401c3dc0afe1189')
            .subscribe(x => {
              this.article = x;
              if ( x.totalResults % this.pageSize != 0 ) {
                this.length = Math.ceil(x.totalResults / this.pageSize);
               } else {
                this.length = x.totalResults / this.pageSize;
              }

            });
        });
      });
    });
  }

  addArticle(a: any) {
    this.dbinter.addArticle(a);
  }
  changepage(x: PageEvent) {
    this.pageindex = x.pageIndex + 1;
    this.pageSize = x.pageSize;
    this.GetLocalNews(this.pageindex, this.pageSize);
  }

  ngOnInit() {
    this.GetLocalNews(this.pageindex, this.pageSize);
  }

}
