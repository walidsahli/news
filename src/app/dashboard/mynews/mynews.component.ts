import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-mynews',
  templateUrl: './mynews.component.html',
  styleUrls: ['./mynews.component.css']
})
export class MynewsComponent implements OnInit {
  public CurrentUserId : any 
  public article : any

  constructor(private db: AngularFireDatabase,private dbinter : DBinterService) { }
  GetMyNews() {
    this.db.list('Users', ref => ref.orderByChild('name').equalTo(this.CurrentUserId.email)).valueChanges().subscribe(x => this.article=x[0])
  }
  DeleteArt(i:any){
    this.dbinter.DeleteArticle(i);
  }

  ngOnInit() {
    this.CurrentUserId = JSON.parse(localStorage.getItem('currentuser'))
    this.GetMyNews()
  }

}
