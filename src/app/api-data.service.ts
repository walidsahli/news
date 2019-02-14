import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public shareddata = new Subject;

  constructor(private http: HttpClient, private router: Router) {
  }

  GetTH(x: string, y: number) {
    const a = 'category=' + x;
    const b = '&page=' + y + '&';
    return this.http.get('https://newsapi.org/v2/top-headlines?'
    + a + b + 'pageSize=20&apiKey=b9d34afdf37948cda401c3dc0afe1189');
  }

  getData(input: any, x: number) {

    return this.http.get<any>('https://newsapi.org/v2/everything?q='
    + input + '&page=' + x + '&pageSize=20&apiKey=b9d34afdf37948cda401c3dc0afe1189');
  }

  GetLocalNews() {

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
            + l[0].nativeName + '&pageSize=100&sortBy=publishedAt&apiKey=b9d34afdf37948cda401c3dc0afe1189')
            .subscribe(x => {
              ;
            });
        });
      });
    });
  }
}
