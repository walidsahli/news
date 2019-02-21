import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public shareddata = new Subject;

  constructor(private http: HttpClient, private router: Router) {
  }

  GetTH(x: string, y: number, z: number) {
    const a = 'category=' + x;
    const b = '&page=' + y ;
    const c =  '&pageSize=' + z;
    return this.http.get('https://newsapi.org/v2/top-headlines?'
    + a + b + c + '&apiKey=b9d34afdf37948cda401c3dc0afe1189');
  }

  getData(input: any, x: number, z: number) {

    return this.http.get<any>('https://newsapi.org/v2/everything?q='
    + input + '&page=' + x + '&pageSize=' + z + '&sources=all&apiKey=b9d34afdf37948cda401c3dc0afe1189');
  }
}
