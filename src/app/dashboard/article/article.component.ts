import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public article: any = []
  public page: number
  public DeleteB: any
  constructor(private data: ApiDataService, private dbint: DBinterService) {

  }

  addArticle(x: any) {
    this.dbint.addArticle(x)
  }
  DeleteArt(x: any) {
    this.dbint.DeleteArticle(x)
  }
  Affich() {
    if (this.article == undefined) return false
    else true
  }

  ngOnInit() {
    this.data.GetLocalNews()
    this.data.DeletButton.subscribe(x => this.DeleteB = x)
    this.data.shareddata.subscribe(x => { this.article = x; })
  }

}
