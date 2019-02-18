import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiDataService } from './api-data.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class DBinterService {
  items: Observable<any[]>
  itemsRef: AngularFireList<any>
  public CurrentUserId: any
  public CurrentUserKey: any
  public userdata: any
  public data: any



  constructor(private db: AngularFireDatabase,
    private apiData: ApiDataService,
    private router: Router) {
    this.itemsRef = this.db.list('Users');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }



  addArticle(arti: any) {
    this.CurrentUserId = JSON.parse(localStorage.getItem('currentuser'))
    const q1 = () => {
      return new Promise((resolve) => this.db.list('Users', ref => ref.orderByChild('name').equalTo(this.CurrentUserId.email))
        .snapshotChanges().subscribe(x => {resolve(x)}))
    }
    const q2 = () => {
      return new Promise((resolve) => this.db.list('Users', ref => ref.orderByChild('name').equalTo(this.CurrentUserId.email))
        .valueChanges().subscribe(x => resolve(x)))
    }

    q1().then(dK => {
      q2().then(dV => {
        let dki: any = dK
        let dvi: any = dV
        const Td = {
          name: this.CurrentUserId.email,
          articles: []
        }
        if (dki.length == 0) {
          Td.articles.push(arti)
          this.itemsRef.push(Td)
        }
        else {
          if (dvi[0].articles == undefined) {
            Td.articles.push(arti)
            this.itemsRef.set(dki[0].key, Td)
          }
          else {
            Td.articles = dvi[0].articles
            Td.articles.push(arti)
            this.itemsRef.set(dki[0].key, Td)
          }
        }
      })
    })
  }




  DeleteArticle(y: any) {
    this.CurrentUserId = JSON.parse(localStorage.getItem('currentuser'))
    let array: any = []
    const q1 = () => {
      return new Promise((resolve) =>
        this.db.list('Users', ref =>
          ref.orderByChild('name').equalTo(this.CurrentUserId.email))
          .snapshotChanges().subscribe(x => resolve(x)))
    }
    const q = () => {
      return new Promise((resolve) =>
        this.db.list('Users', ref =>
          ref.orderByChild('name').equalTo(this.CurrentUserId.email))
          .valueChanges().subscribe(x => resolve(x[0])))
    }
    q().then(x => {
      array = x
      let indexT: number
      console.log(array.articles.length)

      for (var i = 0; i < array.articles.length; i++) {
        if (y.content == array.articles[i].content) indexT = i
      }
      array.articles.splice(indexT, 1)
      q1().then(x => {
        const Td = {
          name: this.CurrentUserId.email,
          articles: []
        }
        Td.articles = array.articles
        this.itemsRef.set(x[0].key, Td)
      })
    })

  }
}
